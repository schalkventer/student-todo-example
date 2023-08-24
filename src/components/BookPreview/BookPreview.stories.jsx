import { faker as f } from "@faker-js/faker";
import { BookPreview } from "./BookPreview";

export default {
  title: "components/BookPreview",
  component: BookPreview,
  tags: ["autodocs"],

  argsTypes: {
    id: {
      disabled: true,
    },
  },

  args: {
    id: f.string.uuid(),
    title: f.lorem.words(),
    onClick: (id) => console.log(id),
    image: f.image.urlPicsumPhotos(),
    author: f.person.fullName(),
  },
};

/**
 * Test case where the book title is really short
 */
export const ShortTitle = {
  args: {
    title: f.lorem.words(1),
  },
};

/**
 * Test case where the book title is extremely long
 */
export const LongTitle = {
  args: {
    title: f.lorem.words(100),
  },
};
