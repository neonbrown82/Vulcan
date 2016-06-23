
Meteor.methods({
  testEmail: function (emailName) {
    
    const email = Telescope.email.emails[emailName];
    
    if(Users.is.adminById(this.userId)){

      console.log("// testing email ["+emailName+"]");
      let html, properties;
    
      // if email has a custom way of generating its HTML, use it
      if (typeof email.getTestHTML !== "undefined") {

        html = email.getTestHTML.bind(email)();

      } else {

        // else get test object (sample post, comment, user, etc.)
        const testObject = email.getTestObject();
        // get test object's email properties
        properties = email.getProperties(testObject);

        // then apply email template to properties, and wrap it with buildTemplate
        html = Telescope.email.buildTemplate(Telescope.email.getTemplate(email.template)(properties));

      }

      // get subject
      const subject = "[Test] " + email.subject.bind(email)(properties);

      Telescope.email.send (Telescope.settings.get('defaultEmail'), subject, html)
 
      return subject;
    
    } else {
      throw new Meteor.Error("must_be_admin", "You must be an admin to send test emails");
    }
  }
});