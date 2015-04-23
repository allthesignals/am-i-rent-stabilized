var app = app || {};

app.s = (function(w,d) {
  // storing the app's state

  var state = {
    formFilled : false, // has the user filled out the address form?    
    currentSlide : null,
    isAnimating : false,
    pageHeight : null,
    yesNoState : false
  };

  app.events.subscribe('state-change', function(updates){
    console.log('state change detected! ', updates);
    
    if (updates.isAnimating !== undefined) state.isAnimating = updates.isAnimating;
    if (updates.formFilled !== undefined) state.formFilled = updates.formFilled;    
    if (updates.currentSlide !== undefined) state.currentSlide = updates.currentSlide;
    if (updates.pageHeight !== undefined) state.pageHeight = updates.pageHeight; 
    if (updates.yesNoState !== undefined) state.yesNoState = updates.yesNoState;
    
    console.log('state: ', state);

    app.events.publish('state-updated', state);
  });

  return {
    state : state
  };

})(window, document);
