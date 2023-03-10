import init, { parse } from './pkg/can_dbc_wasm.js'

console.log(init)

const dbccontent = `
VERSION ""


NS_ :
    NS_DESC_
    CM_
    BA_DEF_
    BA_
    VAL_
    CAT_DEF_
    CAT_
    FILTER
    BA_DEF_DEF_
    EV_DATA_
    ENVVAR_DATA_
    SGTYPE_
    SGTYPE_VAL_
    BA_DEF_SGTYPE_
    BA_SGTYPE_
    SIG_TYPE_REF_
    VAL_TABLE_
    SIG_GROUP_
    SIG_VALTYPE_
    SIGTYPE_VALTYPE_
    BO_TX_BU_
    BA_DEF_REL_
    BA_REL_
    BA_DEF_DEF_REL_
    BU_SG_REL_
    BU_EV_REL_
    BU_BO_REL_
    SG_MUL_VAL_

BS_:

BU_: XXX


BO_ 540 CRZ_CTRL: 8 XXX

BO_ 539 CRZ_INFO: 8 XXX

BO_ 865 RADAR_TRACK_361: 8 XXX
 SG_ DIST_OBJ : 7|12@0+ (1,0) [0|4095] "" XXX
 SG_ ANG_OBJ : 11|12@0- (1,0) [-2047|2047] "" XXX
 SG_ RELV_OBJ : 31|11@0- (1,0) [-1023|1023] "" XXX

BO_ 866 RADAR_TRACK_362: 8 XXX
 SG_ DIST_OBJ : 7|12@0+ (1,0) [0|4095] "" XXX
 SG_ ANG_OBJ : 11|12@0- (1,0) [-2047|2047] "" XXX
 SG_ RELV_OBJ : 31|11@0- (1,0) [-1023|1023] "" XXX

BO_ 867 RADAR_TRACK_363: 8 XXX
 SG_ DIST_OBJ : 7|12@0+ (1,0) [0|4095] "" XXX
 SG_ ANG_OBJ : 11|12@0- (1,0) [-2047|2047] "" XXX
 SG_ RELV_OBJ : 31|11@0- (1,0) [-1023|1023] "" XXX

BO_ 868 RADAR_TRACK_364: 8 XXX
 SG_ DIST_OBJ : 7|12@0+ (1,0) [0|4095] "" XXX
 SG_ ANG_OBJ : 11|12@0- (1,0) [-2047|2047] "" XXX
 SG_ RELV_OBJ : 31|11@0- (1,0) [-1023|1023] "" XXX

BO_ 869 RADAR_TRACK_365: 8 XXX
 SG_ DIST_OBJ : 7|12@0+ (1,0) [0|4095] "" XXX
 SG_ ANG_OBJ : 11|12@0- (1,0) [-2047|2047] "" XXX
 SG_ RELV_OBJ : 31|11@0- (1,0) [-1023|1023] "" XXX

BO_ 870 RADAR_TRACK_366: 8 XXX
 SG_ DIST_OBJ : 7|12@0+ (1,0) [0|4095] "" XXX
 SG_ ANG_OBJ : 11|12@0- (1,0) [-2047|2047] "" XXX
 SG_ RELV_OBJ : 31|11@0- (1,0) [-1023|1023] "" XXX

BO_ 1177 RADAR_499: 8 XXX
`;

const result = parse(dbccontent)

console.log(JSON.parse(result))
