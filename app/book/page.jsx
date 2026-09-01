import { BookRedirect } from "./BookRedirect";

export const metadata = {
  title: "Book Your Stay",
  robots: { index: false, follow: false }
};

export default function BookPage() {
  return <BookRedirect />;
}
