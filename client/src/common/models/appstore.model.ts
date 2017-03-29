import {Item} from './item.model';
import {Widget} from "./widget.model";

// The AppStore we deal with a single object that has some collections and properties
export interface AppStore {
  items: Item[];
  selectedItem: Item;
  widgets: Widget[];
  selectedWidget: Widget;
};
