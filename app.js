const listBuying = {
    "Pistol": "listBuyPistol",
    "Heavy": "listBuyHeavy",
    "SMG": "listBuySMG",
    "Rifle": "listBuyRifle",
    "Equipment": "listBuyEquipment",
    "Grenades": "listBuyGrenades"
}

const listBuyPistol = {
    "Glock-18 / USP-S / P2000": "glock",
    "Dual Berettas": "berettas",
    "P250": "p250",
    "Tec-9 / CZ75-Auto / Five-Seven": "tec9",
    "Desert Eagle / R8 Revolver": "deagle"
}

const listBuyHeavy = {
    "Nova": "nova",
    "XM1014": "xm",
    "Sawed-Off / Mag-7": "sawed-off",
    "M249": "m249",
    "Negev": "negev",
    "Riot Shield": "shield"
}

const listBuySMG = {
    "MAC-10 / MP9": "mac10",
    "MP7 / MP5-SD": "mp7",
    "UMP-45": "ump",
    "P90": "p90",
    "PP-Bizon": "bizon"
}

const listBuyRifle = {
    "Galil AR / FAMAS": "galil",
    "AK-47 / M4A4 / M4A1-S": "ak",
    "SSG 08": "scout",
    "SG 553 / AUG": "aug",
    "AWP": "awp",
    "G3SG1 / SCAR-20": "scar"
}

const listBuyEquipment = {
    "Kevlar Vest": "kevlar",
    "Kevlar Vest + Helmet": "helmet",
    "Zeus x27": "zeus",
    "Defuse Kit": "defuseKit"
}

const listBuyGrenades = {
    "Molotov / Incendiary Grenade": "molotov",
    "Decoy Grenade": "decoy",
    "Flashbang": "flash",
    "HE Grenade": "heGrenade",
    "Smoke Grenade": "smoke"
}

const listEquipment = {
    "Equip": "equip",
    "Drop": "drop"
}

const listMovement = {
    "Forwards": "forwards",
    "Backwards": "backwards",
    "Left": "left",
    "Right": "right",
    "Jump": "jump",
    "Run": "run",
    "Crouch": "crouch",
    "Jumpthrow": "jumpthrow"
}

const listSocial = {
    "Text in Teamchat": "teamchat",
    "Text in Gamechat": "gamechat",
    "Voicechat": "voicechat"
}


function removeOptions(select) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}

function changeSelection2(value) {
    const selection2 = document.getElementById("selection2");
    removeOptions(selection2);
    let list = eval(value);

    if(value == "listBuying") {
        for(let grp in list) {
            let group = document.createElement("optgroup");
            group.label = grp;
            let list2 = eval(list[grp]);

            for(const key in list2) {
                let option = document.createElement("option");
                option.value = list2[key];
                option.text = key;
                group.appendChild(option);
            }
            selection2.appendChild(group);
        }
    }
    else {
        addOptions(selection2, list);
    }
}

function addOptions(select, list) {
    for(const key in list) {
        let option = document.createElement("option");
        option.value = list[key];
        option.text = key;
        select.appendChild(option);
    }
}

function checkSelection2(value) {
    let field = document.getElementById("inputField");
    if(value == "teamchat" || value == "gamechat") {
        field.disabled = false;
        field.required = true;
    } else {
        field.disabled = true;
        field.required = false;
    }
}

function selectButton() {
    let field = document.getElementById("buttonField");
    field.value = "Waiting for button press...";

}