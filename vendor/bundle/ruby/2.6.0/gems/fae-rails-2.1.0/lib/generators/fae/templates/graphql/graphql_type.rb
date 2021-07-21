class Types::<%= class_name %>Type < Types::BaseObject

  graphql_name '<%= class_name %>'

  field :id, ID, null: false
<% if @graphql_attributes.present? -%>
<% @graphql_attributes.each do |graphql_object| -%>
  field :<%= graphql_object[:attr] %>, <%= graphql_object[:type] %>, null: true
<% end -%>
<% end -%>
  field :created_at, String, null: false
  field :updated_at, String, null: false
end
