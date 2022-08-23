/*
 * File: index.mjs
 * Project: oopy-custom-code
 * Created Date: 2022-07-26 04:10
 * Author: hostname (skdusdl8804@gmail.com)
 * -----
 * Last Modified: 2022-08-03 04:52
 * Modified By: Chloekkk
 * -----
 * Copyright (c) 2022 Chloekkk
 */

import sidebar from './sidebar/index.mjs';
import ht from './hiddenTranslate/index.mjs';

const Config = {
  _sidebar: window.sidebar ?? false,
  _hiddenTranslate: window.hiddenTranslate ?? true,
};

document.addEventListener('DOMContentLoaded', function () {
  if (Config._sidebar) {
    sidebar();
  }
  if (Config._hiddenTranslate) {
    ht();
  }
});
