import { useState } from "react";

export const descriptionForm = (productCategoryDescription) => {
    return {
        productCategory: "",
        suitableForProcessing: "",
        averageLiveWeight: "",
        minimumWeight: "",
        maximumWeight: "",
        capacity: "",
        numberOfShifts: "",
        bleedingTime: "",
        followingScaldingSystem: "",
        product: "",
        electrical: "",
        electricalConsumption: "",
        waterConsumption: "",
        iceConsumption: "",
        ...productCategoryDescription
      };
    
}


