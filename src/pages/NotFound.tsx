import { PageHeader } from '../components/ui';

export default function NotFound() {
  return (
    <PageHeader title="Not found" sub="This page does not exist.">
      <a href="#/">← Back home</a>
    </PageHeader>
  );
}
