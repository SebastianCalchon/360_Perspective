import * as THREE from "three";
import { create } from "zustand";
import type { TImagen360 } from "@/components/dome";
import { toast } from "react-toastify";

const imagens360: TImagen360[] = [
  {
    name: "Por Fuera de UnimetaTech",
    url: [
      "/public/imagen360/Fuera_unimetatech-min/slice_0_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_0_15.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_1_15.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_2_15.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_3_15.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_4_15.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_5_15.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_6_15.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_0.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_1.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_2.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_3.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_4.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_5.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_6.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_7.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_8.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_9.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_10.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_11.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_12.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_13.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_14.jpg",
      "/public/imagen360/Fuera_unimetatech-min/slice_7_15.jpg",
    ],
    links: [{ target: 1, position: new THREE.Vector3(0, 0, 18) }],
  },
  {
    name: "Entrada de UnimetaTech",
    url: [
      "/public/imagen360/Entrada_del_edificio-min/slice_0_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_0_15.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_1_15.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_2_15.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_3_15.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_4_15.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_5_15.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_6_15.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_0.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_1.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_2.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_3.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_4.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_5.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_6.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_7.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_8.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_9.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_10.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_11.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_12.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_13.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_14.jpg",
      "/public/imagen360/Entrada_del_edificio-min/slice_7_15.jpg",
    ],
    links: [
      { target: 0, position: new THREE.Vector3(-40, 0, -35) },
      { target: 2, position: new THREE.Vector3(-10, 0, 10) },
    ],
  },
  {
    name: "Recepcion de UnimetaTech",
    url: [
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_0_15.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_1_15.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_2_15.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_3_15.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_4_15.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_5_15.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_6_15.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_0.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_1.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_2.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_3.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_4.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_5.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_6.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_7.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_8.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_9.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_10.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_11.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_12.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_13.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_14.jpg",
      "/public/imagen360/Recepcion_unimetatech-min/slice_7_15.jpg",
    ],
    links: [{ target: 1, position: new THREE.Vector3(6.7, 0, 2) }],
  },
];

type TStatesZones = {
  currentIndex: number;
  currentImg360: TImagen360 | null;
  imagens360: TImagen360[];
  maps: Record<number, THREE.Texture[]>;
};

type TActionZones = {
  changedImagen: (index: number) => void;
  preloadTexture: (chunkSize: number) => Promise<void>;
  priorityItem: () => void;
};

export const useZones = create<TStatesZones & TActionZones>()((set, get) => ({
  currentIndex: 0,
  currentImg360: null,
  imagens360: imagens360,
  maps: {},
  changedImagen: (index) => {
    const { priorityItem } = get();
    set(() => ({ currentIndex: index }));
    priorityItem();
  },
  preloadTexture: async (chunkSize) => {
    const currentIndex = get().currentIndex;
    const imagens = get().imagens360;
    const { maps } = get();

    const halfChunk = Math.floor((chunkSize - 1) / 2);
    const toLoad = [];

    for (let i = 1; i <= halfChunk; i++) {
      if (currentIndex - i >= 0 && !maps[currentIndex - i]) {
        toLoad.push(currentIndex - i);
      }
      if (currentIndex + i < imagens.length && !maps[currentIndex + i]) {
        toLoad.push(currentIndex + i);
      }
    }

    const loadedTextures = await Promise.all(
      toLoad.map(async (index) => {
        const img = imagens[index];
        if (Array.isArray(img.url) && img.url.length > 0) {
          const textures = await Promise.all(
            img.url.map((url) => {
              return new Promise<THREE.Texture>((resolve, reject) => {
                const loader = new THREE.TextureLoader();
                loader.load(
                  url,
                  (texture) => resolve(texture),
                  undefined,
                  (err) => reject(err),
                );
              });
            })
          );

          return { index, textures };
        }
        return null;
      })
    );

    const newTextures = loadedTextures.reduce((acc, item) => {
      if (item) acc[item.index] = item.textures;
      return acc;
    }, {} as Record<number, THREE.Texture[]>);

    set((state) => ({ maps: { ...state.maps, ...newTextures } }));
  },

  priorityItem: async () => {
    const { currentIndex, imagens360, maps } = get();
    const currentImage = imagens360[currentIndex];
    const totalTextures = currentImage.url.length;
    
    // Si ya se han cargado todas las texturas (contando solo las definidas), actualizamos y salimos.
    if (maps[currentIndex] && maps[currentIndex].filter(Boolean).length === totalTextures) {
      set(() => ({
        currentImg360: { ...currentImage, url: maps[currentIndex] }
      }));
      return;
    }

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    
    // Inicializamos el array de texturas si aún no existe
    if (!maps[currentIndex]) {
      set((state) => ({
        currentImg360: { ...currentImage, url: new Array(totalTextures) },
        maps: { ...state.maps, [currentIndex]: new Array(totalTextures) }
      }));
    }
    
    // --- Definición de prioridades usando la posición en la esfera ---
    const cols = 16;
    const rows = totalTextures / cols;
    const centerRow = (rows - 1) / 2;
    const centerCol = (cols - 1) / 2;
    const indices = Array.from({ length: totalTextures }, (_, i) => i);
    indices.sort((a, b) => {
      const rowA = Math.floor(a / cols);
      const colA = a % cols;
      const distA = Math.sqrt((rowA - centerRow) ** 2 + (colA - centerCol) ** 2);
    
      const rowB = Math.floor(b / cols);
      const colB = b % cols;
      const distB = Math.sqrt((rowB - centerRow) ** 2 + (colB - centerCol) ** 2);
      return distA - distB;
    });
    

    const visibleCount = 16;
    const visibleIndices = indices.slice(0, visibleCount);
    const backgroundIndices = indices.slice(visibleCount);
    
    const updateTexture = (index: number, texture: THREE.Texture) => {
      set((state) => {
        const newTextures = state.maps[currentIndex]
          ? [...state.maps[currentIndex]]
          : new Array(totalTextures);
        newTextures[index] = texture;
        return {
          maps: { ...state.maps, [currentIndex]: newTextures },
          currentImg360: { ...currentImage, url: newTextures }
        };
      });
    };
    
    // Cargar el primer chunk de imágenes visibles de inmediato
    const visiblePromise = Promise.all(
      visibleIndices.map(async (index) => {
        const texture = await loader.loadAsync(currentImage.url[index]);
        // Ajustes opcionales para el primer grupo
        texture.flipY = false;
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        updateTexture(index, texture);
      })
    );
    
    const loadBackgroundTextures = async () => {
      await Promise.all(
        backgroundIndices.map(async (index) => {
          try {
            const texture = await loader.loadAsync(currentImage.url[index]);
            texture.flipY = false;
            texture.generateMipmaps = false;
            updateTexture(index, texture);
          } catch (error) {
            console.error(`Error cargando la textura ${index} (${currentImage.url[index]}):`, error);
          }
        })
      );
    };
    await Promise.all([visiblePromise, loadBackgroundTextures()]); 
    toast.success(`Escenario ${currentImage.name} completo! 🎉`);
  },  
}));
