import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

export function Model({ textures, ...props }) {
  const { nodes, materials } = useGLTF('/Sphere-transformed.glb');
  const [updatedMaterials, setUpdatedMaterials] = useState({ ...materials });
  
  useEffect(() => {
    const newMaterials = { ...updatedMaterials }; 

    textures.forEach((texture, index) => {
      if (texture) {
        texture.flipY = false;
        texture.encoding = THREE.sRGBEncoding;
        const verticalIndex = Math.floor(index / 16);
        const horizontalIndex = index % 16;
        const materialName = `Material_${verticalIndex}_${horizontalIndex}`;
        const basicMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: newMaterials[materialName]?.transparent,
          opacity: newMaterials[materialName]?.opacity,
        });

        basicMaterial.needsUpdate = true;

        newMaterials[materialName] = basicMaterial;
      }
    });

    setUpdatedMaterials(newMaterials);
  }, [textures, updatedMaterials]);

  return (
    <group {...props} dispose={null} rotation={[0, -0.78, 0]} scale={[-64, 64, 64]}>
      {Object.keys(updatedMaterials).map((materialName, index) => (
        <mesh
          key={index}
          geometry={nodes[`Sphere_${index + 1}`].geometry}
          material={updatedMaterials[materialName]}
        />
      ))}
    </group>
  );
}
