import Time "mo:core/Time";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";



actor {
  // Contact Form Types and Logic
  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      if (form1.timestamp > form2.timestamp) { #greater } else if (form1.timestamp < form2.timestamp) {
        #less;
      } else {
        #equal;
      };
    };
  };

  let contacts = Map.empty<Text, ContactForm>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.size() == 0) { Runtime.trap("Name cannot be empty.") };
    if (email.size() == 0) { Runtime.trap("Email cannot be empty.") };
    if (message.size() == 0) { Runtime.trap("Message cannot be empty.") };

    let contact : ContactForm = {
      name;
      email;
      message;
      timestamp = Time.now();
    };

    contacts.add(email, contact);
  };

  public query ({ caller }) func getContactByEmail(email : Text) : async ContactForm {
    switch (contacts.get(email)) {
      case (null) { Runtime.trap("Contact not found") };
      case (?contact) { contact };
    };
  };

  public query ({ caller }) func getAllContacts() : async [ContactForm] {
    contacts.values().toArray().sort();
  };

  // Service Request Types and Logic
  type ServiceRequest = {
    applianceType : Text;
    modelNumber : Text;
    issueDescription : Text;
    customerName : Text;
    customerEmail : Text;
    timestamp : Time.Time;
  };

  module ServiceRequest {
    public func compare(req1 : ServiceRequest, req2 : ServiceRequest) : Order.Order {
      if (req1.timestamp > req2.timestamp) { #greater } else if (req1.timestamp < req2.timestamp) {
        #less;
      } else {
        #equal;
      };
    };
  };

  let serviceRequests = Map.empty<Text, ServiceRequest>();

  public shared ({ caller }) func submitServiceRequest(
    applianceType : Text,
    modelNumber : Text,
    issueDescription : Text,
    customerName : Text,
    customerEmail : Text,
  ) : async () {
    if (applianceType.size() == 0) { Runtime.trap("Appliance type cannot be empty.") };
    if (modelNumber.size() == 0) { Runtime.trap("Model number cannot be empty.") };
    if (issueDescription.size() == 0) { Runtime.trap("Issue description cannot be empty.") };
    if (customerName.size() == 0) { Runtime.trap("Customer name cannot be empty.") };
    if (customerEmail.size() == 0) { Runtime.trap("Customer email cannot be empty.") };

    let request : ServiceRequest = {
      applianceType;
      modelNumber;
      issueDescription;
      customerName;
      customerEmail;
      timestamp = Time.now();
    };

    serviceRequests.add(customerEmail # Time.now().toText(), request);
  };

  public query ({ caller }) func getAllServiceRequests() : async [ServiceRequest] {
    serviceRequests.values().toArray().sort();
  };
};
