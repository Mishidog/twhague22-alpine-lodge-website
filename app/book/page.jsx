import { pageMetadata } from "@/data/site";
import { BookRedirect } from "./BookRedirect";

export const metadata = pageMetadata({
  title: "Book Your Stay",
  path: "/book",
  robots: { index: false, follow: false }
});

export default function BookPage() {
  return <BookRedirect />;
}
