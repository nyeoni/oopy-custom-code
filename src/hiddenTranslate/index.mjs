/*
 * File: index.mjs
 * Project: oopy-custom-code
 * Created Date: 2022-07-24 04:53
 * Author: hostname (skdusdl8804@gmail.com)
 * -----
 * Last Modified: 2022-08-08 04:26
 * Modified By: Chloekkk
 * -----
 * Copyright (c) 2022 Chloekkk
 */

export default function hiddenTranslate() {
  const notionTranslate = document.querySelector('div.notion-topbar');
  console.log('fuck', notionTranslate);
  if (notionTranslate) {
    console.log('sibal', notionTranslate.nextSibling.nextSibling);
    notionTranslate.nextSibling.nextSibling.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', hiddenTranslate);
