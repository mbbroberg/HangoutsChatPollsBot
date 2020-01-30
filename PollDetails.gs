function PollDetails() {
  
  this.init = function() {
    this.poll_data = {
      poll_formation_status: POLL_FORMATION_STATUS.READY,
      poller: "",
      options: {
        single_choice: true,
        anonymous: true,
        expiration_time_in_seconds: 0.0
      },
      question: "",
      choices: []
    };
  }
  
  this.clear = function() {
    this.poll_data = null;
  }
  
  this.get = function() {
    return this.poll_data;
  }
  
  this.load = function() {
    // Deserialize any pending poll details from user properties
    var user_properties = PropertiesService.getUserProperties();
    var poll_data = user_properties.getProperty('POLL_DATA');
    
    if (poll_data == null)
      this.init();
    else
      this.poll_data = JSON.parse(poll_data);
  }
  
  this.save = function() {
    var user_properties = PropertiesService.getUserProperties();
    
    // Serialize poll details (if any) back into user properties
    if (this.poll_data == null)
      user_properties.deleteProperty("POLL_DATA");
    else
      user_properties.setProperty("POLL_DATA", JSON.stringify(this.poll_data));
  }
}