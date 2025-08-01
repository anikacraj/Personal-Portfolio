// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import AnimatedBlog from "@/components/AnimatedBlog"; // adjust path as needed

const blogs = [/* your blogs here */];

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogDetail({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <AnimatedBlog
      title={blog.title}
      date={blog.date}
      image={blog.image}
      content={blog.content}
    />
  );
}
