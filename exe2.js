"use strict";
function getButtonStyle(size) {
    switch (size) {
        case "small":
            return { fontSize: "10px", padding: "5px" };
        case "medium":
            return { fontSize: "14px", padding: "10px" };
        case "large":
            return { fontSize: "18px", padding: "15px" };
        default:
            return { fontSize: "14px", padding: "10px" };
    }
}
