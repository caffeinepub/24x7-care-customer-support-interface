import Time "mo:core/Time";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
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
};
