//% color="#ff6600" weight=20 icon="\uf085"
namespace MUVisionSensor {
    export enum VISION_TYPE {
        //% block="🌈 Color Block"
        VISION_COLOR_DETECT=1,
        //% block="🌈 Color Recognition"
        VISION_COLOR_RECOGNITION=2,
        //% block="⚽ Ball Detect"
        VISION_BALL_DETECT=3,
        //% block="👥 Body Detect"
        VISION_BODY_DETECT=5,
        //% block="🔳 Shape Card"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 Traffic Card"
        VISION_TRAFFIC_CARD_DETECT=7,
        //% block="🔳 Number Card"
        VISION_NUM_CARD_DETECT=8
    }
    export enum _VISION_TYPE {
        //% block="🌈 Color Block"
        VISION_COLOR_DETECT=1,
        //% block="⚽ Ball Detect"
        VISION_BALL_DETECT=3,
        //% block="👥 Body Detect"
        VISION_BODY_DETECT=5,
        //% block="🔳 Shape Card"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 Traffic Card"
        VISION_TRAFFIC_CARD_DETECT=7,
        //% block="🔳 Number Card"
        VISION_NUM_CARD_DETECT=8
    }
    export enum CARD_TYPE {
        //% block="🔳 Shape Card"
        VISION_SHAPE_CARD_DETECT=6,
        //% block="🔳 Traffic Card"
        VISION_TRAFFIC_CARD_DETECT,
        //% block="🔳 Number Card"
        VISION_NUM_CARD_DETECT
    }
    export enum TRAFFIC_CARD_TYPE {
        //% block="⬆ Forward"
        TRAFFIC_CARD_FORWARD=1,
        //% block="⬅ Left"
        TRAFFIC_CARD_LEFT,
        //% block="➡ Right"
        TRAFFIC_CARD_RIGHT,
        //% block="🔙 Turn Around"
        TRAFFIC_CARD_TURN_AROUND,
        //% block="🅿️ Park"
        TRAFFIC_CARD_PARK
    }
    export enum SHAPE_CARD_TYPE {
        //% block="✔ Tick"
        SHAPE_CARD_TICK=1,
        //% block="✖ Cross"
        SHAPE_CARD_CROSS,
        //% block="⭕ Circle"
        SHAPE_CARD_CIRCLE,
        //% block="◻ Square"
        SHAPE_CARD_SQUARE,
        //% block="🛆 Triangle"
        SHAPE_CARD_TRIANGLE
    }
    export enum COLOR_TYPE {
        //% block="black"
        BLACK=1,
        //% block="white"
        WHITE,
        //% block="red"
        RED,
        //% block="yellow"
        YELLOW,
        //% block="green"
        GREEN,
        //% block="cyan"
        CYAN,
        //% block="blue"
        BLUE,
        //% block="purple"
        PURPLE,
        //% block="others"
        UNKOWN=0
    }
    export enum NUM_CARD_TYPE {
        //% block="1"
        NUM_CARD_1=1,
        //% block="2"
        NUM_CARD_2,
        //% block="3"
        NUM_CARD_3,
        //% block="4"
        NUM_CARD_4,
        //% block="5"
        NUM_CARD_5,
        //% block="6"
        NUM_CARD_6,
        //% block="7"
        NUM_CARD_7,
        //% block="8"
        NUM_CARD_8,
        //% block="9"
        NUM_CARD_9,
        //% block="0"
        NUM_CARD_0=0,
    }
    export enum Params {
        //% block="x position"
        X_POS=1,
        //% block="y position"
        Y_POS,
        //% block="width"
        WIDTH,
        //% block="height"
        HEIGHT,
        //% block="label"
        LABLE
    }
    export enum ColorParams {
        //% block="red channel"
        Red_channal=6,
        //% block="green channel"
        Green_channal=7,
        //% block="blue channel"
        Blue_channal=8,
        //% block="label"
        LABLE=5
    }
    export enum DIR {
        //%blockId=DIR_X block="X"
        X = 0,
        //%blockId=DIR_Y block="Y"
        Y
    }

    /**
     * get vision status
     * @param id MU id
     * @param type vision type
     */
    //% blockId=MU3Detected block="%id|is detected%type" color="#2E8B57"
    //% weight=79
    //% group="Functions"
    export function detected(id:mu_id_t, type:MuVsMessageVisionType):boolean{
        return muvs.GetValue(id, type, MuVsObjectInf.kStatus) ? true:false
    }
    let x_last = -1;
    let y_last = -1;
    //% blockId=MU3GetColorRCGLabel block="%id|is detected 🌈 Color Recognition x%x|y%y" color="#2E8B57"
    //% x.min=0 x.max=100 x.defl=50
    //% y.min=0 y.max=100 y.defl=50
    //% group="Functions"
    export function MuVs2GetColorRCGLabel(id:mu_id_t,x:number,y:number):boolean{
        x = x>100 ? 100:(x<0 ? 0:x);
        y = y>100 ? 100:(y<0 ? 0:y);
        if (x != x_last) {
            x_last = x;
            muvs.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kXValue, x);
        }
        if (y != y_last) {
            y_last = y;
            muvs.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kYValue, y);
        }
        return muvs.GetValue(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kStatus) ? true:false
    }
    let label_last = -1;
    //% blockId=MU3GetColorDetectLabel block="%id|is detected 🌈 Color Block color%color" color="#2E8B57"
    //% group="Functions"
    export function MuVs2GetColorDetectLabel(id:mu_id_t,label:COLOR_TYPE):boolean{
        if (label_last != label) {
            label_last = label;
            muvs.write(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kLabel, label)
        }
        return muvs.GetValue(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kStatus) ? true:false
    }
    //% block="get%id|%type|%item" color="#2E8B57"
    //% shim=muvs::get_value
    //% group="Functions"
    export function get_value(id:mu_id_t,type:_VISION_TYPE,item:Params):number{
        return 0
    }
    //% block="get%id|🌈 Color Recognition|%item" color="#2E8B57"
    //% shim=muvs::get_color_value
    //% group="Functions"
    export function get_color_value(id:mu_id_t,item:ColorParams):number{
        return 0
    }
    //% blockId=MU3GetShapeCardType block="%id|get 🔳 Shape Card =%type" color="#2E8B57"
    //% group="Functions"
    export function get_shape_card_type(id:mu_id_t,type:SHAPE_CARD_TYPE):boolean{
        return muvs.GetValue(id, MuVsMessageVisionType.kVisionShapeCard, MuVsObjectInf.kLabel) == type
    }
    //% blockId=MU3GetTrafficCardType block="%id|get 🔳 Traffic Card =%type" color="#2E8B57"
    //% group="Functions"
    export function get_traffic_card_type(id:mu_id_t,type:TRAFFIC_CARD_TYPE):boolean{
        return muvs.GetValue(id, MuVsMessageVisionType.kVisionTrafficCard, MuVsObjectInf.kLabel) == type
    }
    //% blockId=MU3GetNumberCardType block="%id|get 🔳 Number Card =%type" color="#2E8B57"
    //% group="Functions"
    export function get_number_card_type(id:mu_id_t,type:NUM_CARD_TYPE):boolean{
        return muvs.GetValue(id, MuVsMessageVisionType.kVisionNumberCard, MuVsObjectInf.kLabel) == type
    }
    //% blockId=MU3GetColorRCGType block="%id|get 🌈 Color Recognition color =%color" color="#2E8B57"
    //% group="Functions"
    export function get_color_recognize(id:mu_id_t,color:COLOR_TYPE):boolean{
        return muvs.GetValue(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kLabel) == color;
    }
    let gesture = 0;
    //% blockId=MU3MU3GestureDetect block="%id|light sensor|is detected gesture" color="#ff6600"
    //% group="Light Sensor"
    export function GestureDetect(id:mu_id_t):boolean{
        gesture = muvs.LsReadGesture(id);
        return gesture ? true:false;
    }
    //% blockId=MU3GetGestureType block="%id|light sensor|get gesture =|%MuVsLsGesture" color="#ff6600"
    //% group="Light Sensor"
    export function GetGestureType(id:mu_id_t, type:MuVsLsGesture):boolean{
        return gesture == type;
    }
}
