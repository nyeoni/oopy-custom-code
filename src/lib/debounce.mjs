/*
 * File: debounce.mjs
 * Project: oopy-custom-code
 * Created Date: 2022-08-03 04:42
 * Author: hostname (skdusdl8804@gmail.com)
 * -----
 * Last Modified: 2022-08-03 04:49
 * Modified By: Chloekkk
 * -----
 * Copyright (c) 2022 Chloekkk
 */

export default function debounce(func, delay = 100) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
