const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo();
export const STYLE_DISPLAY = {
  x: (DEVICE_WIDTH-192)/2,
  text_size: 80,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  w: 192,
  h: 96,
  color: 0xffffff
};
export const STYLE_EDIT_BTN = {
  text_size: 48,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  h: 96,
  w: 50,
  color: 0xAAAAAA
};
export const STYLE_EDIT_INC = {
  text: "+",
  x: (DEVICE_WIDTH-192)/2 + 142
};

export const STYLE_EDIT_DEG = {
  text: "−",
  x: (DEVICE_WIDTH-192)/2
}