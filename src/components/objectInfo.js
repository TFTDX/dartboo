// ---------------- TYPES -----------------
// Doors:
export const SINGLE_DOOR = "SINGLE_DOOR";
export const DOUBLE_DOOR = "DOUBLE_DOOR";
export const SLIDING_DOOR = "SLIDING_DOOR";
export const POCKET_DOOR = "POCKET_DOOR";
export const BIFOLD_DOOR = "BIFOLD_DOOR";
// Windows:
export const WINDOW_32 = "WINDOW_32";
export const WINDOW_48 = "WINDOW_48";
export const WINDOW_60 = "WINDOW_60";
// Kitchen:
export const COUNTER_MIDDLE = "COUNTER_MIDDLE";
export const COUNTER_CORNER = "COUNTER_CORNER";
export const COUNTER_END = "COUNTER_END";
export const COOK_TOP = "COOK_TOP";
export const DISHWASHER = "DISHWASHER";
export const SINK = "SINK";
export const DOUBLE_SINK = "DOUBLE_SINK";
// Laundry:
export const WASHER = "WASHER";
export const DRYER = "DRYER";
// Bathroom:
export const BATH = "BATH";
export const BR_SINK = "BR_SINK";
export const TOILET = "TOILET";
export const SHOWER_RECT = "SHOWER_RECT";
export const SHOWER_SQUARE = "SHOWER_SQUARE";
// Living Room:
export const CHAIR = "CHAIR";
export const LOVESEAT = "LOVESEAT";
export const SOFA = "SOFA";
export const COFFEE_TABLE = "COFFEE_TABLE";
export const END_TABLE = "END_TABLE";
// Dining Room:
export const TABLE_ROUND = "TABLE_ROUND";
export const TABLE_RECT = "TABLE_RECT";
// Bedroom:
export const QUEEN_BED = "QUEEN_BED";
export const TWIN_BED = "TWIN_BED";

//BOO
export const BALLOON_LIGHT = "BALOON_LIGHT";
export const DOME = "DOME";
export const DUO_TENT = "DUO_TENT";
export const EU30I = "EU30I";
export const EU65I = "EU65I";
export const RUBBISH_BIN = "RUBBISH_BIN";
export const TM18_2 = "TM18_2";
export const TM18 = "TM18";
export const TM36 = "TM36";
export const TRAIL_TENT = "TRAIL_TENT";

// ----------- GET OBJECT SIZES ---------------
// Returns object size in inches
export const getObjectSize = (type) => {
  switch (type) {
    case TM36:
      return { w: 6, h: 6 };
    case TM18_2:
      return { w: 3, h: 6 };
    case DOME:
      return { w: 4.5, h: 4.5 };
    case TRAIL_TENT:
      return { w: 3, h: 2.8 };
    case DUO_TENT:
      return { w: 2.4, h: 1.2 };
    case SINGLE_DOOR:
      return { w: 32, h: 32 };
    case DOUBLE_DOOR:
      return { w: 64, h: 32 };
    case SLIDING_DOOR:
    case POCKET_DOOR:
      return { w: 64, h: 6 };
    case BIFOLD_DOOR:
      return { w: 60, h: 18 };
    case WINDOW_32:
      return { w: 4, h: 1 };
    case WINDOW_48:
      return { w: 8, h: 1 };
    case WINDOW_60:
      return { w: 12, h: 1 };
    case COUNTER_CORNER:
    case COUNTER_MIDDLE:
    case COUNTER_END:
    case COOK_TOP:
    case DISHWASHER:
    case SINK:
      return { w: 24, h: 24 };
    case DOUBLE_SINK:
      return { w: 48, h: 24 };
    case WASHER:
    case DRYER:
      return { w: 27, h: 27 };
    case BATH:
      return { w: 60, h: 32 };
    case SHOWER_RECT:
      return { w: 60, h: 32 };
    case SHOWER_SQUARE:
      return { w: 32, h: 32 };
    case CHAIR:
      return { w: 35, h: 35 };
    case SOFA:
      return { w: 84, h: 34 };
    case COFFEE_TABLE:
      return { w: 40, h: 20 };
    case END_TABLE:
      return { w: 18, h: 18 };
    case TABLE_RECT:
      return { w: 48, h: 36 };
    case TABLE_ROUND:
      return { w: 32, h: 32 };
    case QUEEN_BED:
      return { w: 60, h: 80 };
    case TWIN_BED:
      return { w: 38, h: 75 };
    default:
      return { w: 32, h: 32 };
  }
};
