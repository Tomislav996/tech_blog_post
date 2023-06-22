

const footerButton = $("#footerButton")
const footer = $(".footer")
const alertMessage = $("#alertMessage")
alertMessage.hide()
const alertMessageText = $("#inputMessage")

$(document).ready(function() {
    footerButton.hide().delay(2000).fadeIn()
    // Hide the footer initially
    footer.hide()
  
    // Newsletter Button
    const newsletterButton = $(".submitButton")
    newsletterButton.on('click', function(){
        const emailInput = $(".emailInput").val()
        if (emailInput.includes(".com") && emailInput.includes("@")) {
          alertMessage.show()
          alertMessageText.text("You've successfully registered for our newsletter." +
          "You will now receive all of the latest updates from our website")
          alertMessage.delay(3000).fadeOut()
        }
         else {      
          alertMessageText.text("Please enter a valid email!")
          alertMessage.show().delay(1000).fadeOut()
        }
      })
  
    // Show Footer
    footerButton.on('click', function(){
      footer.slideDown()
      footerButton.hide()
    })
  
    // Hide Footer
    const hideFooter = $("#hideFooter")
    hideFooter.on('click', function(){
      footer.slideUp()
      footerButton.delay(900).fadeIn()
    })
})

