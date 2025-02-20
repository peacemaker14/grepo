"use client";

import Image from "next/image";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

import {
  GithubUser,
  useGithubUserSearch,
} from "@src/hooks/useGithubUserSearch";

import styles from "./UserSearch.module.css";

export type User = GithubUser;

interface UserSearchProps {
  selected: GithubUser | null;
  onChange: (user: GithubUser | null) => void;
  query: string;
  onQueryChange: (query: string) => void;
}

const UserSearch = ({
  selected,
  onChange,
  query,
  onQueryChange,
}: UserSearchProps) => {
  const { data: users = [], isLoading } = useGithubUserSearch(query);

  return (
    <Combobox value={selected} onChange={onChange}>
      <div className={styles.container}>
        <ComboboxInput
          className={styles.input}
          onChange={(event) => onQueryChange(event.target.value)}
          displayValue={(user: GithubUser) => user?.login ?? ""}
          placeholder="Search GitHub users..."
        />

        <ComboboxOptions className={styles.options}>
          {isLoading && <div className={styles.loading}>Loading...</div>}

          {users.map((user) => (
            <ComboboxOption
              key={user.id}
              value={user}
              className={({ focus }) =>
                `${styles.option} ${focus ? styles.optionActive : ""}`
              }
            >
              <div className={styles.userItem}>
                <Image
                  src={user.avatarUrl}
                  alt={user.login}
                  className={styles.avatar}
                  width={32}
                  height={32}
                  unoptimized
                />
                <span>{user.login}</span>
              </div>
            </ComboboxOption>
          ))}

          {!isLoading && users.length === 0 && query !== "" && (
            <div className={styles.noResults}>No users found.</div>
          )}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
};

export default UserSearch;
