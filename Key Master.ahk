#Requires AutoHotkey v2.0
#SingleInstance Force
#Warn All, Off
SetWorkingDir A_ScriptDir
CoordMode "Mouse", "Client"
CoordMode "Pixel", "Client"
SetMouseDelay 10

THEME := {
    background: "0x1F2937",
    text: "0xFFFFFF", 
    gold: "0xFECE00",
    navyBlue: "0x374151",
    groupBackground: "0x374151"
}

class WorldState {
    static currentWorld := "Normal"
    static UpdateWorld(world) {
        this.currentWorld := world
    }
}

mainGui := ""
lvStatus := ""
useCheck := ""
combineCheck := ""
SCRIPT_TITLE := "PS99 Key Master"
isRunning := false
USE_MODE := true
COMBINE_MODE := true

class PixelLocations {
    static hoverboard := Map("Start", [29, 372], "End", [29, 372], "Colour", "0xFF911A", "Tolerance", 2)
    static inventoryButton := Map("Start", [390, 508], "End", [390, 508], "Colour", "0x15DCCE", "Tolerance", 2)
    static itemsBoostsLine := Map("Start", [301, 152], "End", [301, 152], "Colour", "0xE9E9E9", "Tolerance", 2)
    static searchCursor := Map("Start", [620, 118], "End", [650, 118], "Colour", "0xAFAFAF", "Tolerance", 2)
    static searchTerm := Map("Start", [693, 98], "End", [703, 114], "Colour", "0x1E1E1E", "Tolerance", 2)
    static stupidCat := Map("Start", [301, 152], "End", [301, 152], "Colour", "0xFFB232", "Tolerance", 2)
    static leftBorder := Map("Start", [160, 366], "End", [160, 366], "Colour", "0x2A2B31", "Tolerance", 2)
    static successBorder := Map("Start", [169, 366], "End", [169, 366], "Colour", "0x2A2B31", "Tolerance", 2)
    static item1 := Map("Start", [109, 235], "End", [109, 235], "Colour", "0xFCFDFD", "Tolerance", 2)
    static crystalKey := Map("Start", [109, 235], "End", [109, 235], "Colour", "0x5EE2F6", "Tolerance", 2)
    static techKey := Map("Start", [109, 235], "End", [109, 235], "Colour", "0x4A84AE", "Tolerance", 2)
    static voidKey := Map("Start", [109, 235], "End", [109, 235], "Colour", "0xDDE8F7", "Tolerance", 2)
    static secretKey := Map("Start", [109, 235], "End", [109, 235], "Colour", "0xA686ED", "Tolerance", 2)
}

class ClickLocations {
    static searchBox := [540, 107]
    static inventoryIcon := [49, 95]
    static itemsTab := [26, 205]
    static item1 := [109, 235]
    static combineOne := [287, 409]
    static combineSuccess := [397, 409]
    static closeButton := [746, 109]
}

isInventoryOpen() {
    loc := PixelLocations.hoverboard
    return PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

isInventoryButtonCentered() {
    loc := PixelLocations.inventoryButton
    return PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

isItemsTabOpen() {
    loc := PixelLocations.itemsBoostsLine
    return PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

isInventorySearchBoxSelected() {
    loc := PixelLocations.searchCursor
    return PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

isSearchTermEntered() {
    loc := PixelLocations.searchTerm
    return PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

isCombineWindowOpen() {
    loc := PixelLocations.leftBorder
    return PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

isSuccessWindowOpen() {
    loc := PixelLocations.successBorder
    return PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

hasItem() {
    loc := PixelLocations.item1
    return !PixelSearch(&foundX, &foundY, loc["Start"][1], loc["Start"][2], loc["End"][1], loc["End"][2], loc["Colour"], loc["Tolerance"])
}

isItemKey() {
    loc1 := PixelLocations.crystalKey
    if PixelSearch(&foundX, &foundY, loc1["Start"][1], loc1["Start"][2], loc1["End"][1], loc1["End"][2], loc1["Colour"], loc1["Tolerance"])
        return true

    loc2 := PixelLocations.techKey
    if PixelSearch(&foundX, &foundY, loc2["Start"][1], loc2["Start"][2], loc2["End"][1], loc2["End"][2], loc2["Colour"], loc2["Tolerance"])
        return true

    loc3 := PixelLocations.voidKey
    if PixelSearch(&foundX, &foundY, loc3["Start"][1], loc3["Start"][2], loc3["End"][1], loc3["End"][2], loc3["Colour"], loc3["Tolerance"])
        return true

    loc4 := PixelLocations.secretKey
    if PixelSearch(&foundX, &foundY, loc4["Start"][1], loc4["Start"][2], loc4["End"][1], loc4["End"][2], loc4["Colour"], loc4["Tolerance"])
        return true

    return false
}

createGui() {
    mainGui := Gui("+AlwaysOnTop -Caption +Border")
    mainGui.MarginX := 10
    mainGui.MarginY := 10
    mainGui.BackColor := THEME.background
    
    screenWidth := A_ScreenWidth
    screenHeight := A_ScreenHeight
    guiWidth := 350
    guiHeight := 275
    xPos := screenWidth - guiWidth - 20
    yPos := 20

    mainGui.SetFont("s11 bold", "Segoe UI")
    mainGui.AddText("x0 y8 w" guiWidth " Center c" THEME.gold, "——— " SCRIPT_TITLE " ———")
    
    mainGui.SetFont("s9 norm", "Segoe UI")
    mainGui.AddGroupBox("x8 y35 w" guiWidth-16 " h80 Background" THEME.background " c" THEME.navyBlue, "⚔️ Status")
    global lvStatus := mainGui.AddListView("x20 y55 r1 w" guiWidth-40 " -Hdr", ["Action"])
    lvStatus.Add(, "Waiting to start - Start in Normal World")
    lvStatus.ModifyCol(1, guiWidth-65)
    
    mainGui.AddGroupBox("x8 y125 w" guiWidth-16 " h80 Background" THEME.background " c" THEME.navyBlue, "⚡ What to Do")
    global combineCheck := mainGui.AddCheckbox("x20 y150 c" THEME.text " Checked", "Combine Keys")
    global useCheck := mainGui.AddCheckbox("x20 y175 c" THEME.text " Checked", "Use Keys")
        
    btnStart := mainGui.AddButton("x12 y225 w105 h35", "⚔️ Start (F1)")
    btnReload := mainGui.AddButton("x127 y225 w105 h35", "⟳ Reload (F5)")
    btnStop := mainGui.AddButton("x242 y225 w95 h35", "✖ Stop (F6)")
    
    useCheck.OnEvent("Click", updateModes)
    combineCheck.OnEvent("Click", updateModes)
    btnStart.OnEvent("Click", startMacro)
    btnReload.OnEvent("Click", (*) => Reload())
    btnStop.OnEvent("Click", (*) => ExitApp())
    
    OnMessage(0x201, WM_LBUTTONDOWN)
    
    mainGui.Show("w" guiWidth " h" guiHeight " x" xPos " y" yPos)
}

openInventoryMenu() {
    if isInventoryOpen()
        return true

    if isInventoryButtonCentered() {
        SendEvent "{f}"
        Sleep 100
    }

    Loop 5 {
        if isInventoryOpen()
            return true
        Sleep 10
    }
    return false
}

openItemsTab() {
    Loop 50 {
        if isInventoryOpen()
            break
        Sleep 10
    }

    if isItemsTabOpen()
        return true

    Loop 10 {
        SendEvent "{Click, " ClickLocations.itemsTab[1] ", " ClickLocations.itemsTab[2] ", 1}"
        Sleep 10

        Loop 25 {
            if isItemsTabOpen()
                return true
            Sleep 10
        }
    }
    return false
}

clickInventorySearchBox() {
    if isInventorySearchBoxSelected()
        return true

    Loop 10 {
        if isSearchTermEntered() {
            SendEvent "{Click, " ClickLocations.inventoryIcon[1] ", " ClickLocations.inventoryIcon[2] ", 1}"
            Sleep 10
        }
        Loop 25 {
            SendEvent "{Click, " ClickLocations.searchBox[1] ", " ClickLocations.searchBox[2] ", 1}"
            Sleep 10
            if isInventorySearchBoxSelected()
                return true
        }
    }
    return false
}

enterSearchTerm(Item) {
    if isSearchTermEntered()
        return true

    Loop 10 {
        SendText Item
        Loop 25 {
            Sleep 10
            if isSearchTermEntered()
                return true
        }
    }
    return false
}

leftClickUseItem() {
    Loop 25 {
        if isItemKey() {
            SendEvent "{Click, " ClickLocations.item1[1] ", " ClickLocations.item1[2] ", 1}"
            Loop 50 {
                Sleep 10
                if !isInventoryOpen()
                    return true
            }
        }
        else
            return false
    }
    return false
}

leftClickCombineOne() {
    Loop 50 {
        if isCombineWindowOpen()
            break
        Sleep 10
    }

    Loop 50 {
        SendEvent "{Click, " ClickLocations.combineOne[1] ", " ClickLocations.combineOne[2] ", 1}"
        Sleep 10
        if !isCombineWindowOpen()
            break
    }
}

leftClickCombineSuccess() {
    Loop 50 {
        if isSuccessWindowOpen()
            break
        Sleep 10
    }

    Loop 50 {
        SendEvent "{Click, " ClickLocations.combineSuccess[1] ", " ClickLocations.combineSuccess[2] ", 1}"
        Sleep 10
        if !isSuccessWindowOpen()
            break
    }

    Loop 50 {
        Sleep 10
        if isInventoryOpen()
            break
    }
}

closeInventoryMenu() {
    if !isInventoryOpen()
        return

    Loop 25 {
        SendEvent "{Click, " ClickLocations.closeButton[1] ", " ClickLocations.closeButton[2] ", 1}"
        Sleep 10
        if !isInventoryOpen()
            break
    }
}

useItem(itemToUse) {
    if !openInventoryMenu()
        return true

    if !openItemsTab()
        return true

    if !clickInventorySearchBox()
        return true

    if !enterSearchTerm(itemToUse)
        return true

    if !hasItem()
        return false

    if leftClickUseItem() {
        leftClickCombineOne()
        leftClickCombineSuccess()
    }
    return true
}

doCombineKeys() {
    keys := ["Crystal Key: Upper Half", "Tech Key: Upper Half", "Void Key: Upper Half", "Secret Key: Upper Half"]
    for key in keys {
        updateStatus("Combining " . key)
        Loop {
            hasItem := useItem(key)
            if !hasItem
                break
        }
    }
    closeInventoryMenu()
}

GoToTechWorld() {
    WorldState.UpdateWorld("Tech")
    updateStatus("Moving to Tech World")
    Sleep 1000
    safeClick(101, 171)
    Sleep 750
    safeClick(20, 275)
    Sleep 750
    safeClick(285, 415)
    Sleep 1000
    checkForPlayerFullyLoaded()
}

GoToVoidWorld() {
    WorldState.UpdateWorld("Void")
    updateStatus("Moving to Void World")
    Sleep 1000
    safeClick(101, 171)
    Sleep 750
    safeClick(20, 320)
    Sleep 750
    safeClick(285, 415)
    Sleep 1000
    checkForPlayerFullyLoaded()
}

DoCrystalKeys() {
    if (!USE_MODE)
        return
    updateStatus("Using Crystal Keys")
    Sleep 500
    safeClick(100, 170)
    Sleep 750
    safeClick(480, 193)
    Sleep 10000
    Send "{q down}"
    Sleep 203
    Send "{q up}"
    Sleep 297
    Send "{w down}"
    Sleep 593
    Send "{w up}"
    Sleep 282
    Send "{a down}"
    Sleep 2350
    Send "{a up}"
    Sleep 703
    Send "{s down}"
    Sleep 313
    Send "{s up}"
    findGreenButton()
}

DoTechKeys() {
    if (!USE_MODE)
        return
    updateStatus("Using Tech Keys")
    Sleep 500
    safeClick(100, 170)
    Sleep 750
    safeClick(480, 193)
    Sleep 10000
    safeClick(100, 170)
    Sleep 750
    safeClick(100, 170)
    Sleep 10000
    Send "{q down}"
    Sleep 94
    Send "{q up}"
    Sleep 609
    Send "{w down}"
    Sleep 94
    Send "{w up}"
    Sleep 468
    Send "{a down}"
    Sleep 516
    Send "{a up}"
    Sleep 313
    Send "{w down}"
    Sleep 796
    Send "{w up}"
    Sleep 125
    Send "{a down}"
    Sleep 2150
    Send "{a up}"
    Sleep 188
    Send "{w down}"
    Sleep 1500
    Send "{w up}"
    Send "{space down}"
    Sleep 150
    Send "{space up}"
    Send "{w down}"
    Sleep 175
    Send "{w up}"
    findGreenButton()
}

DoVoidKeys() {
    if (!USE_MODE)
        return
    updateStatus("Using Void Keys")
    Sleep 500
    safeClick(100, 170)
    Sleep 750
    safeClick(100, 170)
    Sleep 2500
    checkForPlayerFullyLoaded()
    safeClick(101, 171)
    Sleep 750
    safeClick(20, 320)
    Sleep 750
    safeClick(285, 415)
    Sleep 2500
    checkForPlayerFullyLoaded()
    Send "{q down}"
    Sleep 125
    Send "{q up}"
    Sleep 266
    Send "{s down}"
    Sleep 500
    Send "{s up}"
    Sleep 547
    Send "{space down}"
    Sleep 150
    Send "{space up}"
    Sleep 100
    Send "{s down}"
    Sleep 500
    Send "{s up}"
    Sleep 547
    Send "{d down}"
    Sleep 172
    Send "{d up}"
    Sleep 812
    findGreenButton()
}

safeClick(x, y) {
    MouseMove x-1, y-1
    Sleep 50
    MouseMove x+1, y+1
    Sleep 50
    MouseMove x, y
    Sleep 50
    Click x, y
    Sleep 50
}

updateModes(*) {
    global USE_MODE := useCheck.Value
    global COMBINE_MODE := combineCheck.Value
}

updateStatus(status) {
    lvStatus.Modify(1,, status)
}

WM_LBUTTONDOWN(wParam, lParam, msg, hwnd) {
    try PostMessage 0xA1, 2
}

checkForPlayerFullyLoaded() {
    updateStatus("Waiting for player to load...")
    Loop {
        safeClick(400, 300)
        Sleep 500
        
        try {
            if (ImageSearch(&foundX, &foundY, 0, 0, 800, 600, "*30 inventory.png")) {
                Sleep(500)
                Send "{Tab}"
                Sleep(100)
                return true
            }
        }
        Sleep(500)
    }
}

findGreenButton() {
    safeClick(400, 42)
    Sleep 200
    
    okFound := false
    while (!okFound) {
        Send "{e down}"
        Sleep 50
        Send "{e up}"
        Sleep 50
        
        MouseMove 0, 0
        Sleep 100
        
        MouseMove -100, -100
        Sleep 100
        
        try {
            if (ImageSearch(&foundX, &foundY, 0, 0, 800, 600, "*30 ok.png")) {
                safeClick(foundX, foundY)
                Sleep 1000
                okFound := true
                continue
            }
        }
        
        x := 627
        while (x >= 161) {
            try {
                if (PixelSearch(&foundX, &foundY, x, 400, x, 470, "0x97FA17", 30)) {
                    safeClick(foundX, foundY)
                    Sleep 100
                    
                    Loop 2 {
                        clickX := foundX - (A_Index * 10)
                        safeClick(clickX, foundY)
                        Sleep 100
                    }
                    Sleep 5000
                    break
                }
            }
            x--
        }
        
        Sleep 200
    }
}

useKeysInSequence() {
    updateStatus("Starting key usage sequence...")
    DoCrystalKeys()
    updateStatus("Moving to Tech World...")
    GoToTechWorld()
    DoTechKeys()
    updateStatus("Moving to Void World...")
    GoToVoidWorld()
    DoVoidKeys()
}

startMacro(*) {
    if (isRunning)
        return
    global isRunning := true
    updateStatus("Starting macro...")
    
    try {
        updateStatus("Activating Roblox...")
        WinActivate "ahk_exe RobloxPlayerBeta.exe"
        Sleep 500
        
        updateStatus("Resizing window...")
        try {
            windowHandle := WinGetID("ahk_exe RobloxPlayerBeta.exe")
            WinRestore windowHandle
            WinMove , , 800, 600, windowHandle
        } catch {
            updateStatus("Error: Couldn't resize window")
            return
        }
        
        Sleep 1000
        WinActivate "ahk_exe RobloxPlayerBeta.exe"
        Sleep 500

        updateStatus("Checking if player is loaded...")
        checkForPlayerFullyLoaded()

        if (COMBINE_MODE) {
            updateStatus("Combining Keys...")
            doCombineKeys()
        }

        if (USE_MODE)
            useKeysInSequence()
    } catch as err {
        updateStatus("Error: " err.Message)
    }
    
    global isRunning := false
    updateStatus("Macro completed!")
}

F1::startMacro()
F5::Reload()
F6::ExitApp()
F8::Pause()

createGui()