// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

const validKeys = ["github", "deploy"] as const;
type vKeyType = typeof validKeys[number];

type Project = {
  title: string,
  description: string,
  github?: string,
  deploy?: string
}

type Category = {
  heading: string,
  description: string,
  collapsible: boolean
  projects: Project[]
}

export type Data = {
  categories: Category[]
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mdDirectory = path.join(process.cwd(), 'content');
  const fileContents = await fs.readFile(mdDirectory + '/projects.md', 'utf8');

  const categories = fileContents.split('---');
  let response: Data = { categories: [] };
  for (let c in categories) {
    let category = categories[c].trim();
    let [info, ...projects] = category.split('\n\n');
    let infomatches = info.match(/^(?:# *)(\S+(?: \S*)*)\n([^\n]*)$/);
    let heading = infomatches?.[1] || "NO HEADING";
    let description = infomatches?.[2] || "NO DESCRIPTION";
    let projectArray: Project[] = [];
    for (let p in projects) {
      let [rawheader, ...projectdesc] = projects[p].trim().split('\n');
      let [rawtitle, meta] = rawheader.split('|');
      let title = rawtitle.trim().match(/^(?:## *)(\S+(?: \S*)*)$/)?.[1] || "INVALID TITLE";

      let metaTags: { [key in vKeyType]?: string } = {};
      if (meta) {
        meta = meta.trim();
        let tags = meta.split(',');
        for (let t in tags) {
          let [key, val] = tags[t].split("=");
          if (!(key && val)) continue;
          key = key.trim();
          if (!validKeys.includes(key as vKeyType)) continue;
          let verifiedKey = key as vKeyType;
          val = val.trim().match(/"(.*)"/)?.[1] || "NO VALUE";
          metaTags[verifiedKey] = val;
        }
      }

      let description = projectdesc.join(' ');
      projectArray.push({
        description,
        title,
        ...metaTags
      });
    }
    response.categories.push({
      heading, description, projects: projectArray, collapsible: true
    });
  }

  res.send(response);
}
