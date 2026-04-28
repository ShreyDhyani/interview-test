"use client";

import { useState } from "react";
import { DeleteConfirmModal } from "@repo/ui/delete-confirm-modal";
import { Trash2 } from "lucide-react";
import styles from "./page.module.css";

const sampleTodos = [
  { id: 1, title: "Set up project structure", done: true },
  { id: 2, title: "Build add-todo interaction", done: false },
  { id: 3, title: "Add filters (all/active/completed)", done: false },
];

export default function Home() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTodoTitle, setSelectedTodoTitle] = useState("");

  const openDeleteModal = (todoTitle: string) => {
    setSelectedTodoTitle(todoTitle);
    setIsDeleteModalOpen(true);
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <header className={styles.header}>
          <h1>Todo Starter</h1>
          <p>Basic interview-ready structure. Keep building from here.</p>
        </header>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="What needs to be done?"
            aria-label="New todo"
          />
          <button type="button">Add</button>
        </form>

        <ul className={styles.list}>
          {sampleTodos.map((todo) => (
            <li key={todo.id} className={styles.item}>
              <label>
                <input type="checkbox" checked={todo.done} readOnly />
                <span className={todo.done ? styles.done : ""}>{todo.title}</span>
              </label>
              <button
                type="button"
                className={styles.deleteButton}
                aria-label={`Delete ${todo.title}`}
                onClick={() => openDeleteModal(todo.title)}
              >
                <Trash2 size={16} aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <DeleteConfirmModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        itemName={selectedTodoTitle}
      />
    </main>
  );
}
