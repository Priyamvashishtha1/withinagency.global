import DivisionTemplate from '@/components/DivisionTemplate';
import { getDivision } from '@/lib/divisions';
import { pageMetadata } from '@/lib/seo';

const division = getDivision('media');

export const metadata = pageMetadata({
  title: division.title,
  description: division.metaDescription,
  path: division.path,
});

export default function Page() {
  return <DivisionTemplate division={division} />;
}
