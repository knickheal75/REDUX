export function selectBootcamper(bootcamper){
    //selectBootcamper is an action creator,it needs to return an action
    // an object with a typr property
    return {
        type:"BOOTCAMPER_SELECTED",
        payload: bootcamper
    }
}

