// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { report } from 'node:process';


const config=({
  testDir: './tests',
  reporter : 'html',
  timeout: 20*1000,
  expect : {
    timeout: 10*1000
  },

  use: {
  browserName : 'chromium',
  headless : false
  },


});

module.exports=config;
