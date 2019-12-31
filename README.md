# MU Vision Sensor 3

The MU Vision Sensor is a sensor module that supports Arduino, Microbit, and other haredware platform that supports UART or I2C communication protocols.

## Basic usage

* Vision begin

```blocks
// Initialized MU with I2C port
muvision.begin(MuId.Mu00, MuVsMode.kI2CMode)
// Vision begin
muvision.visionBegin(MuId.Mu00, MuStatus.Enable, MuVsMessageVisionType.kVisionBall)
```

* Get vision result

```blocks
muvision.begin(MuId.Mu00, MuVsMode.kI2CMode)
muvision.visionBegin(MuId.Mu00, MuStatus.Enable, MuVsMessageVisionType.kVisionBall)
basic.forever(function () {
    // Get vision status first
    if (muvision.detected(MuId.Mu00, MuVsMessageVisionType.kVisionBall)) {
        // If vision detected, print vision result
        serial.writeValue("x", muvision.visionValue(MuId.Mu00, muvision.VisionType.VisionBallDetect, muvision.Params.Horizontal))
        serial.writeValue("y", muvision.visionValue(MuId.Mu00, muvision.VisionType.VisionBallDetect, muvision.Params.Vertical))
        serial.writeValue("w", muvision.visionValue(MuId.Mu00, muvision.VisionType.VisionBallDetect, muvision.Params.Width))
        serial.writeValue("h", muvision.visionValue(MuId.Mu00, muvision.VisionType.VisionBallDetect, muvision.Params.Height))
    }
})
```

## License

MIT

## Supported targets

* for PXT/microbit

