/**
 * This class defines an controller view for content groups.
 * It renders an editor view or a details view depending on the state
 * of the underlying model.
 * It is expected to be backed by a Group model.
 */
define([
    'js/views/list_item', 'js/views/content_group_editor', 'js/views/content_group_details', 'gettext', "js/views/utils/view_utils"
], function(ListItemView, ContentGroupEditorView, ContentGroupDetailsView, gettext, ViewUtils) {
    'use strict';

    var ContentGroupItemView = ListItemView.extend({
        events: {
            'click .delete': 'deleteItem'
        },

        tagName: 'section',

        baseClassName: 'content-group',

        canDelete: true,

        // Translators: this refers to a collection of groups.
        itemDisplayName: gettext('content group'),

        attributes: function () {
            return {
                'id': this.model.get('id'),
                'tabindex': -1
            };
        },

        createEditView: function() {
            return new ContentGroupEditorView({model: this.model});
        },

        createDetailsView: function() {
            return new ContentGroupDetailsView({model: this.model});
        }

//        deleteItem: function(event) {
//            if (event && event.preventDefault) { event.preventDefault(); }
//            if (!this.canDelete) { return; }
//            var model = this.model.collection.parents[0],
//                itemDisplayName = this.itemDisplayName;
//            ViewUtils.confirmThenRunOperation(
//                interpolate(
//                    // Translators: "item_display_name" is the name of the item to be deleted.
//                    gettext('Delete this %(item_display_name)s?'),
//                    {item_display_name: itemDisplayName}, true
//                ),
//                interpolate(
//                    // Translators: "item_display_name" is the name of the item to be deleted.
//                    gettext('Deleting this %(item_display_name)s is permanent and cannot be undone.'),
//                    {item_display_name: itemDisplayName},
//                    true
//                ),
//                gettext('Delete'),
//                function() {
//                    return ViewUtils.runOperationShowingMessage(
//                        gettext('Deleting'),
//                        function () {
//                            return model.destroy({wait: true});
//                        }
//                    );
//                }
//            );
//        }

    });

    return ContentGroupItemView;
});
