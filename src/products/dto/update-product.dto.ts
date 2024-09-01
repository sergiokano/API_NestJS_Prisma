import { CreateProductDto } from './create-product.dto';

// Partial is a utility type that makes all properties of the type optional.
export type UpdateProductDto = Partial<CreateProductDto>;
