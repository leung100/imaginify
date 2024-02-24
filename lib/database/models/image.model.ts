import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // URL fields are represented as strings
  width?: number; // Optional property
  height?: number; // Optional property
  config?: Record<string, unknown>; // Object type, more specific typing can be applied based on the known structure
  transformationUrl?: string; // Optional and represented as string
  aspectRatio?: string; // Optional property
  color?: string; // Optional property
  prompt?: string; // Optional property
  author: { _id: string; firstName: string; lastName: string }; // For referencing another document, can be typed as string for simplicity
  createdAt?: Date; // Optional because of the default value
  updatedAt?: Date; // Optional because of the default value
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("image", ImageSchema);

export default Image;
