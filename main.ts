let acc = 0
forever(function () {
    acc = controller.acceleration(ControllerDimension.Strength)
})
