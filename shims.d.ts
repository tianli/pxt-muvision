// Auto-generated. Do not edit.



    //% color="#ff6600" weight=50 icon="\uf110"
namespace muvision {

    /**
     * Initialize MU.
     */
    //% blockId=mu3_begin block="initialize%id|port%port"
    //% group="Settings" shim=muvision::begin
    export function begin(id: MuId, port: MuVsMode): void { basic.pause(100) }

    /**
     * Reset MU.
     */
    //% blockId=mu3_set_default block="%id|restore default settings"
    //% group="Settings" shim=muvision::setDefault
    export function setDefault(id: MuId): void { basic.pause(100) }

    /**
     * MU vision begin.
     */
    //% blockId=mu3_vision_begin block="%id|%enable|algorithm%type"
    //% group="Settings" shim=muvision::visionBegin
    export function visionBegin(id: MuId, status: MuStatus, type: MuVsMessageVisionType): void { basic.pause(100) }

    /**
     * set led color.
     * @param id MU id
     * @param led led type.
     * @param detected_color led color while sensor detected target.
     * @param undetected_color led color while sensor undetected target.
     */
    //% blockId=mu3_led_set_color block="%id|LED %led|when detected %detected_color|when undetected %undetected_color"
    //% weight=200 inlineInputMode=inline
    //% group="Settings" advanced=true shim=muvision::ledSetColor
    export function ledSetColor(id: MuId, led: MuVsLed, detected_color: MuVsLedColor, undetected_color: MuVsLedColor): void { basic.pause(100) }

    /**
     * set vision level.
     * @param id MU id
     * @param type vision type
     * @param level vision level
     */
    //% blockId=mu3_vision_set_level block="%id|algorithm%VISION_TYPE|Level%level"
    //% group="Settings" advanced=true shim=muvision::visionSetLevel
    export function visionSetLevel(id: MuId, type: MuVsMessageVisionType, level: MuVsVisionLevel): void { basic.pause(100) }

    /**
     * set camera zoom.
     * @param id MU id
     * @param zoom zoom value.
     */
    //% blockId=mu3_camera_set_zoom block="%id|digital zoom%level"
    //% group="Settings" advanced=true shim=muvision::cameraSetZoom
    export function cameraSetZoom(id: MuId, zoom: MuVsCameraZoom): void { basic.pause(100) }

    /**
     * set camera white balance.
     * @param id MU id
     * @param wb white balance type.
     */
    //% blockId=mu3_camera_set_awb block="%id|white balance%wb"
    //% group="Settings" advanced=true shim=muvision::cameraSetAwb
    export function cameraSetAwb(id: MuId, wb: MuVsCameraWhiteBalance): void { basic.pause(100) }

    /**
     * set camera FPS.
     * @param id MU id
     * @param on FPS type.
     */
    //% blockId=mu3_camera_set_fps block="%id|high FPS mode$on"
    //% on.shadow="toggleOnOff" on.defl="true"
    //% group="Settings" advanced=true on.defl=1 shim=muvision::cameraSetFPS
    export function cameraSetFPS(id: MuId, on?: boolean): void { basic.pause(100) }

    /**
     * Enable/Disable light sensor function,gesture detect can not used with other functions.
     * @param id MU id
     * @param status enable/disable function
     * @param[in] ls_type Function type
     */
    //% blockId=MU3LsBegin block="%id|light sensor|%status|%ls_type"
    //% group="Light Sensor" shim=muvision::lsBegin
    export function lsBegin(id: MuId, status: MuStatus, ls_type: MuLsType): void { basic.pause(100) }

    /**
     * Light snesor set sensitivity.
     * @param id MU id
     * @param sensitivity sensitivity
     */
    //% blockId=MU3LsSetSensitivity block="%id|light sensor|set sensitivity%sensitivity"
    //% group="Light Sensor" shim=muvision::lsSetSensitivity
    export function lsSetSensitivity(id: MuId, sensitivity: MuVsLsSensitivity): void { basic.pause(100) }

    /**
     * @brief Read proximity data.
     * @param id MU id
     * @retval proximity data, 0~255.
     */
    //% blockId=MU3LsReadProximity block="%id|light sensor|read proximity"
    //% group="Light Sensor" shim=muvision::lsReadProximity
    export function lsReadProximity(id: MuId): uint8 { basic.pause(100); return 0; }

    /**
     * @brief Read ambient light sensor data.
     * @param id MU id
     * @retval ambient light sensor data, 0~65536.
     */
    //% blockId=MU3LsReadAmbientLight block="%id|light sensor|read ambient light"
    //% group="Light Sensor" shim=muvision::lsReadAmbientLight
    export function lsReadAmbientLight(id: MuId): uint16 { basic.pause(100); return 0; }

    /**
     * get vision result data, this function will update vision result automatically.
     * @param id MU id
     * @param vision_type: vision type.
     * @param object_inf:  object information
     */
    //% blockId=mu3_get_value shim=muvision::getValue
    export function getValue(id: MuId, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf): int32 { basic.pause(100); return 0; }

    /**
     * @brief  write vision parameter.
     * @param id MU id
     * @param vision_type vision type.
     * @param object_inf  object information
     * @param value  value
     */
    //% blockId=mu3_write shim=muvision::write
    export function write(id: MuId, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf, value: int32): void { basic.pause(100) }

    /**
     * @brief Read gesture sensor data.
     * @retval Gesture witch MU detected.
     */
    //% blockId=mu3_ls_read_gesture shim=muvision::lsReadGesture
    export function lsReadGesture(id: MuId): MuVsLsGesture { basic.pause(100); return null }
}



    //% color="#11ACEF" icon="\uf1eb"
namespace muvisionAT {

    /**
     * Read SIP 
     */
    //% blockId=mu3_at_wifi_sip block="MU|read SIP"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiSIP
    export function wifiSIP(): string { basic.pause(100); return null; }

    /**
     * Read CIP 
     */
    //% blockId=mu3_at_wifi_cip block="MU|read CIP"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiCIP
    export function wifiCIP(): string { basic.pause(100); return null; }

    /**
     * MU AT wifi set
     */
    //% blockId=mu3_at_wifi_set block="MU|WiFi set|ssid|%ssid|password|%password|apmode|%apmode"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiSet
    export function wifiSet(ssid: string, password: string, apmode: MuAtMode): void { basic.pause(100) }

    /**
     * MU AT wifi connect, return `true`=success
     */
    //% blockId=mu3_at_wifi_con block="MU|WiFi connect|%status"
    //% status.shadow="toggleOnOff" status.defl="true"
    //% group="MUVisionSensor3_AT" status.defl=1 shim=muvisionAT::wifiCon
    export function wifiCon(status?: boolean): boolean { basic.pause(100); return false; }

    /**
     * MU AT wifi set target IP&port 
     */
    //% blockId=mu3_at_wifi_udp block="MU|WiFi set target IP|%ip|port|%port"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiUDP
    export function wifiUDP(ip: string, port: string): void { basic.pause(100) }

    /**
     * MU AT wifi read data 
     */
    //% blockId=mu3_at_wifi_read block="MU|WiFi read"
    //% group="MUVisionSensor3_AT" shim=muvisionAT::wifiRead
    export function wifiRead(): int32 { basic.pause(100); return 0; }
}

// Auto-generated. Do not edit. Really.
