import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

export class ShapeFactory {
  getShape(shapeType: String) {
    if (shapeType == null) {
      return null;
    }
    if ("circle" == shapeType.toLowerCase()) {
      return new Circle();
    } else if ("rectangle" == shapeType.toLowerCase()) {
      return new Rectangle();
    } else if ("square" == shapeType.toLowerCase()) {
      return new Square();
    }
    return null;
  }
}
