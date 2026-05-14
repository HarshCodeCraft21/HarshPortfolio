create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Anyone can submit a contact message"
on public.contact_messages
for insert
to anon, authenticated
with check (
  length(name) between 1 and 100
  and length(email) between 3 and 255
  and length(message) between 1 and 2000
);
