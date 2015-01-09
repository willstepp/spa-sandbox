json.array!(@widgets) do |widget|
  json.extract! widget, :id, :name, :desc, :price
  json.url widget_url(widget, format: :json)
end
