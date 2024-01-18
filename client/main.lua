
Visible = false
Seatbelt = false
Voip = { active = false, current = "Falando"}

updateVoip = function(active, mode)
    Voip = { active = active, current = mode}
end

toggleHud = function()
    Wait(100)
    Visible = not Visible
    SendNUIMessage({ action = 'ui:visibility', payload = Visible })
    DisplayRadar(false)
end

CreateThread(function()
    while true do
        local ped = PlayerPedId()
        local pedCoords = GetEntityCoords(ped)
        local pedHealth = ((GetEntityHealth(ped) - 101) * 100 / 300)
        local pedInVehicle = IsPedInAnyVehicle(ped)
        local pedShield = GetPedArmour(ped) 
        local gameClock = {GetClockHours(),GetClockMinutes()}
        local streetHash = GetStreetNameAtCoord(pedCoords.x,pedCoords.y,pedCoords.z)
        local streetName = GetStreetNameFromHashKey(streetHash)
        SendNUIMessage({ action = 'ui:updateHealth', payload = pedHealth })
        SendNUIMessage({ action = 'ui:updateShield', payload = pedShield })
        SendNUIMessage({ action = 'ui:updateTime', payload = gameClock })
        SendNUIMessage({ action = 'ui:updateStreet', payload = streetName })
        SendNUIMessage({ action = 'ui:speedometerVisibility', payload = pedInVehicle })
        SendNUIMessage({ action = 'ui:updateVoip', payload = Voip })

        if pedInVehicle then
            local vehicle = GetVehiclePedIsIn(ped)
            local vehicleSpeed = GetEntitySpeed(vehicle) * 3.6
            local vehicleMaxSpeed = GetVehicleModelEstimatedMaxSpeed(GetEntityModel(vehicle)) * 3.6
            local vehicleEngine = GetVehicleEngineHealth(vehicle) / 10.0
            local vehicleTurnOn = GetIsVehicleEngineRunning(vehicle)
            local vehicleFuelLevel = GetVehicleFuelLevel(vehicle)
            local _, _v, vehicleLights = GetVehicleLightsState(vehicle)
            local vehicleDoors = GetVehicleDoorLockStatus(vehicle)
            local vehicleGear = GetVehicleCurrentGear(vehicle)

            SendNUIMessage({ action = 'ui:speedometerSpeed', payload = { speed = math.floor(vehicleSpeed), maxSpeed = math.floor(vehicleMaxSpeed) }})
            SendNUIMessage({ action = 'ui:speedometerStates', payload = { engine = vehicleTurnOn, lights = vehicleLights, locked = vehicleDoors, seatbelt = Seatbelt }})
            SendNUIMessage({ action = 'ui:speedometerEngine', payload = vehicleEngine })
            SendNUIMessage({ action = 'ui:speedometerGas', payload = vehicleFuelLevel })
            SendNUIMessage({ action = 'ui:speedometerGear', payload = vehicleGear })

            if IsRadarHidden() then
                DisplayRadar(true)
            end
        else
            if Seatbelt then
                Seatbelt = false
            end
            if not IsRadarHidden() then
                DisplayRadar(false)
            end
        end 

        Wait(75)
    end
end)

CreateThread(function()
    while true do
        local playerTime = 500
        local ped = PlayerPedId()
        if IsPedInAnyVehicle(ped) then
            playerTime = 5
            if IsControlJustPressed(0,73) then
                Seatbelt = not Seatbelt
                if Seatbelt then -- Sistema de sounds do seu servidor
					TriggerEvent("vrp_sound:source","belt",0.5) 
				else
					TriggerEvent("vrp_sound:source","unbelt",0.5)
				end
            end

            if Seatbelt then
                DisableControlAction(0,75,true)
            end
        end
        Wait(playerTime)
    end
end)

CreateThread(function()
	local minimap = RequestScaleformMovie("minimap")
    SetRadarBigmapEnabled(true, false)
    SetRadarBigmapEnabled(false, false)
	while true do
	    BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
	    ScaleformMovieMethodAddParamInt(3)
	    EndScaleformMovieMethod()
	    Wait(500)
	end
end)

RegisterNetEvent("os_hud:updateVoip", updateVoip) -- TriggerEvent("os_hud:updateVoip", { active = true, current = "Falando"})
RegisterCommand("hud",toggleHud)
CreateThread(toggleHud)