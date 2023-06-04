import { AppGesture } from "../../lib/AppGesture";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo();

class ImageViewScreen {
	constructor(data) {
		this.path = data;
	}

	start() {
      // Read TGA image header
      const f = hmFS.open_asset(this.path, hmFS.O_RDONLY);
      const header = new Uint8Array(18);
      hmFS.seek(f, 0, hmFS.SEEK_SET);
      hmFS.read(f, header.buffer, 0, 18);
      hmFS.close(f);

      const width = (header[13] << 8) + header[12];
      const height = (header[15] << 8) + header[14];

      hmUI.showToast({text: width + "x" + height});

      hmUI.createWidget(hmUI.widget.IMG, {
        x: (DEVICE_WIDTH - width) / 2,
        y: (DEVICE_HEIGHT - height) / 2,
        src: this.path
      });
	}
}

Page({
  onInit(p) {
    console.log(`ImageViewScreen`);
    AppGesture.withYellowWorkaround("left", {
      appid: 33904,
      url: "page/ImageViewScreen",
      param: p,
    });
    AppGesture.init();
    new ImageViewScreen(p).start();
  }
});
