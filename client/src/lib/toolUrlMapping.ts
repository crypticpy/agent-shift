/**
 * Tool URL Mapping
 * Maps tool names to their official vendor websites
 * Used for making tool badges clickable in use case demonstrations
 */

export const TOOL_URLS: Record<string, string> = {
  // Data Sources - Analytics & Marketing
  "Google Analytics": "https://analytics.google.com",
  "HubSpot": "https://www.hubspot.com",
  "LinkedIn API": "https://developer.linkedin.com",
  "LinkedIn": "https://www.linkedin.com",
  "Mixpanel": "https://mixpanel.com",

  // Data Sources - Productivity & Collaboration
  "Google Sheets": "https://sheets.google.com",
  "Slack": "https://slack.com",
  "Outlook": "https://outlook.com",
  "Gmail": "https://mail.google.com",
  "Google Calendar": "https://calendar.google.com",
  "SharePoint": "https://www.microsoft.com/en-us/microsoft-365/sharepoint",
  "Airtable": "https://www.airtable.com",
  "Notion": "https://www.notion.com",

  // Data Sources - Development & Project Management
  "Jira": "https://www.atlassian.com/software/jira",
  "Confluence": "https://www.atlassian.com/software/confluence",
  "GitHub": "https://github.com",
  "Zoom Transcripts": "https://zoom.us",

  // Data Sources - Research & Reference
  "Zotero": "https://www.zotero.org",
  "Google Scholar": "https://scholar.google.com",
  "PDF Library": "https://www.adobe.com/acrobat.html",

  // Data Sources - CRM & Sales
  "Salesforce CRM": "https://www.salesforce.com",

  // Orchestration Platforms
  "Make.com": "https://www.make.com",
  "Power Automate": "https://powerautomate.microsoft.com",
  "n8n (self-hosted)": "https://n8n.io",
  "n8n": "https://n8n.io",
  "Salesforce Einstein": "https://www.salesforce.com/products/einstein/overview/",
  "Elicit": "https://elicit.com",

  // AI Agents
  "Claude": "https://claude.ai",
  "Claude Desktop": "https://claude.ai/download",
  "ChatGPT": "https://chat.openai.com",
  "GPT-4": "https://openai.com/gpt-4",
};

/**
 * Get the vendor website URL for a given tool name
 * @param toolName - The name of the tool as it appears in use case data
 * @returns The vendor website URL, or undefined if not found
 */
export function getToolUrl(toolName: string): string | undefined {
  return TOOL_URLS[toolName];
}

/**
 * Check if a tool has a mapped URL
 * @param toolName - The name of the tool
 * @returns True if the tool has a URL mapping
 */
export function hasToolUrl(toolName: string): boolean {
  return toolName in TOOL_URLS;
}
