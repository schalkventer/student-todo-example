import { z } from "zod";

const KEY = "fa373519-84f9-438c-bfa3-2ac095966c43";

const schema = z.object({
  /**
   * A unique, client-generated identifier for the task. Does not persist, value
   * is regenerated whenever the app is restarted.
   */
  id: z.string(),

  /**
   * Name of task as shown to user.
   */
  title: z.string(),

  /**
   * The "pending" and "completed" determines whether the checkbox associated
   * with the task is selected or not, whereas archived determines whether the
   * task is even present in the list by default (archived tasks are hidden by
   * default).
   */
  status: z.enum(["pending", "completed", "archived"]),
});

/**
 * @typedef {z.infer<typeof schema>} Task
 */

const conversion = {
  /**
   * @param {Task[]} taskArray
   * @returns {void}
   */
  toLocal: (taskArray) => {
    const result = z.array(schema).parse(taskArray);
    window.localStorage.setItem(KEY, JSON.stringify(result));
  },

  /**
   *
   */
  fromLocal: () => {},
};

export const Task = {};
