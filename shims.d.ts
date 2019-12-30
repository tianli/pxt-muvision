// Auto-generated. Do not edit.



    //% color="#ff6600" weight=50 icon="\uf110"
declare namespace MUVisionSensor {

    /**
     * Initialize MU.
     */
    //% blockId=mu_init block="init %id|interface %port"
    //% weight=100
    //% group="Settings" shim=MUVisionSensor::begin
    function begin(id: mu_id_t, port: MuVsMode): void;

    /**
     * Reset MU.
     */
    //% blockId=MU_reset block="%id|restore default settings"
    //% weight=100
    //% group="Settings" shim=MUVisionSensor::reset
    function reset(id: mu_id_t): void;

    /**
     * MU vision begin.
     */
    //% blockId=MU_VisionBegin block="%id|%enable|algorithm%type"
    //% weight=50
    //% group="Settings" shim=MUVisionSensor::VisionBegin
    function VisionBegin(id: mu_id_t, status: mu_status_t, type: MuVsMessageVisionType): void;

    /**
     * set led color.
     * @param id MU id
     * @param led led type.
     * @param detected_color led color while sensor detected target.
     * @param undetected_color led color while sensor undetected target.
     * @param level led brightness, form 0(close) to 15
     */
    //% blockId=MU_set_led block="%id|LED %led|when detected %detected_color|when undetected %undetected_color"
    //% weight=200 inlineInputMode=inline
    //% group="Settings" advanced=true shim=MUVisionSensor::set_led
    function set_led(id: mu_id_t, led: MuVsLed, detected_color: MuVsLedColor, undetected_color: MuVsLedColor): void;

    /**
     * set vision level.
     * @param id MU id
     * @param type vision type
     * @param level vision level
     */
    //% blockId=MU_set_level block="%id|algorithm%VISION_TYPE|Level%level"
    //% weight=96
    //% group="Settings" advanced=true shim=MUVisionSensor::set_level
    function set_level(id: mu_id_t, type: MuVsMessageVisionType, level: MuVsVisionLevel): void;

    /**
     * set camera zoom.
     * @param id MU id
     * @param zoom zoom value.
     */
    //% blockId=MU_set_zoom block="%id|digital zoom%level"
    //% weight=95
    //% group="Settings" advanced=true shim=MUVisionSensor::set_zoom
    function set_zoom(id: mu_id_t, zoom: MuVsCameraZoom): void;

    /**
     * set camera white balance.
     * @param id MU id
     * @param wb white balance type.
     */
    //% blockId=MU_set_awb block="%id|white balance%wb"
    //% weight=93
    //% group="Settings" advanced=true shim=MUVisionSensor::set_WB
    function set_WB(id: mu_id_t, wb: MuVsCameraWhiteBalance): void;

    /**
     * set camera FPS.
     * @param id MU id
     * @param on FPS type.
     */
    //% blockId=MU3CameraSetFPS block="%id|high FPS mode$on"
    //% on.shadow="toggleOnOff" on.defl="true"
    //% group="Settings" advanced=true on.defl=1 shim=MUVisionSensor::onOff
    function onOff(id: mu_id_t, on?: boolean): void;

    /**
     * Enable/Disable light sensor function,gesture detect can not used with other functions.
     * @param id MU id
     * @param status enable/disable function
     * @param[in] ls_type Function type
     */
    //% blockId=MU3LsBegin block="%id|light sensor|%status|%ls_type"
    //% group="Light Sensor" shim=MUVisionSensor::LsBegin
    function LsBegin(id: mu_id_t, status: mu_status_t, ls_type: mu_ls_t): void;

    /**
     * Light snesor set sensitivity.
     * @param id MU id
     * @param sensitivity sensitivity
     */
    //% blockId=MU3LsSetSensitivity block="%id|light sensor|set sensitivity%sensitivity"
    //% group="Light Sensor" shim=MUVisionSensor::LsSetSensitivity
    function LsSetSensitivity(id: mu_id_t, sensitivity: MuVsLsSensitivity): void;

    /**
     * @brief Read proximity data.
     * @param id MU id
     * @retval proximity data, 0~255.
     */
    //% blockId=MU3LsReadProximity block="%id|light sensor|read proximity"
    //% group="Light Sensor" shim=MUVisionSensor::LsReadProximity
    function LsReadProximity(id: mu_id_t): uint8;

    /**
     * @brief Read ambient light sensor data.
     * @param id MU id
     * @retval ambient light sensor data, 0~65536.
     */
    //% blockId=MU3LsReadAmbientLight block="%id|light sensor|read ambient light"
    //% group="Light Sensor" shim=MUVisionSensor::LsReadAmbientLight
    function LsReadAmbientLight(id: mu_id_t): uint16;

    /**
     * @brief Read light sensor color data.
     * @param id MU id
     * @param color_t kLsColorLabel:      get color label
     *                    kLsColorRed:        get RGB R value(0~255)
     *                    kLsColorGreen:      get RGB G value(0~255)
     *                    kLsColorBlue:       get RGB B value(0~255)
     *                    kLsColorHue:        get HSV H value(0~360)
     *                    kLsColorSaturation: get HSV S value(0~255)
     *                    kLsColorValue:      get HSV V value(0~255)
     * @retval Light sensor detected color data value
     */
    //% blockId=MU3LsReadColor block="%id|light sensor|read color %color_t"
    //% group="Light Sensor"
    //% deprecated=true shim=MUVisionSensor::LsReadColor
    function LsReadColor(id: mu_id_t, color_t: MuVsLsColorType): uint16;
}



    //% color="#ff6600" weight=50 icon="\uf110"
declare namespace muvs {

    /**
     * get vision result data, this function will update vision result automatically.
     * @param id MU id
     * @param vision_type: vision type.
     * @param object_inf:  object information
     */
    //% blockId=MU3GetValue shim=muvs::GetValue
    function GetValue(id: mu_id_t, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf): int32;

    /**
     * @brief  write vision parameter.
     * @param id MU id
     * @param vision_type vision type.
     * @param object_inf  object information
     * @param value  value
     */
    //% blockId=MU3write shim=muvs::write
    function write(id: mu_id_t, vision_type: MuVsMessageVisionType, object_inf: MuVsObjectInf, value: uint8): void;

    /**
     * @brief Read gesture sensor data.
     * @retval Gesture witch MU detected.
     */
    //% blockId=MU3LsReadGesture shim=muvs::LsReadGesture
    function LsReadGesture(id: mu_id_t): MuVsLsGesture;
}



    //% color="#11ACEF" icon="\uf1eb"
declare namespace MUVisionSensor_AT {

    /**
     * Read SIP 
     */
    //% blockId=MU3ATWifiSIP block="MU|read SIP"
    //% group="MUVisionSensor3_AT" shim=MUVisionSensor_AT::WifiSIP
    function WifiSIP(): string;

    /**
     * Read CIP 
     */
    //% blockId=MU3ATWifiCIP block="MU|read CIP"
    //% group="MUVisionSensor3_AT" shim=MUVisionSensor_AT::WifiCIP
    function WifiCIP(): string;

    /**
     * MU AT wifi set
     */
    //% blockId=MU3ATWifiSet block="MU|WiFi set|ssid|%ssid|password|%password|apmode|%apmode"
    //% group="MUVisionSensor3_AT" shim=MUVisionSensor_AT::WifiSet
    function WifiSet(ssid: string, password: string, apmode: mu3at_mode_t): void;

    /**
     * MU AT wifi connect, return `true`=success
     */
    //% blockId=MU3ATWifiCon block="MU|WiFi connect|%status"
    //% status.shadow="toggleOnOff" status.defl="true"
    //% group="MUVisionSensor3_AT" status.defl=1 shim=MUVisionSensor_AT::WifiCon
    function WifiCon(status?: boolean): boolean;

    /**
     * MU AT wifi set target IP&port 
     */
    //% blockId=MU3ATWifiUDP block="MU|WiFi set target IP|%ip|port|%port"
    //% group="MUVisionSensor3_AT" shim=MUVisionSensor_AT::WifiUDP
    function WifiUDP(ip: string, port: string): void;

    /**
     * MU AT wifi read data 
     */
    //% blockId=MU3ATWifiRead block="MU|WiFi read"
    //% group="MUVisionSensor3_AT" shim=MUVisionSensor_AT::WifiRead
    function WifiRead(): int32;
}

// Auto-generated. Do not edit. Really.
