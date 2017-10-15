/**
 * Schema for WhiteCards collection
 */

const schema = {
  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: () => {
      return new Date();
    },
  },
  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      fieldName: 'creator',
      type: 'User',
      resolver: (card, args, context) => {
        return context.Users.findOne({ _id: card.userId }, {fields: context.Users.getViewableFields(context.currentUser, context.Users) });
      },
      addOriginalField: true
    }
  },
  text: {
    label: 'Text',
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },

};

export default schema;
