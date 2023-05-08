const DEVICE_NAMES = {
    raviole: "Pixel 6/Pro",
    bluejay: "Pixel 6A",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
