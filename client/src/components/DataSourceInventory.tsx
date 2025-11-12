import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail, MessageSquare, FileText, ClipboardList, Users, Database, Code, Check
} from 'lucide-react';

interface DataSource {
  id: string;
  name: string;
  icon: string;
  category: string;
}

const dataSourcesConfig: DataSource[] = [
  { id: 'gmail', name: 'Gmail', icon: 'Mail', category: 'Email' },
  { id: 'outlook', name: 'Outlook', icon: 'Mail', category: 'Email' },
  { id: 'slack', name: 'Slack', icon: 'MessageSquare', category: 'Chat' },
  { id: 'teams', name: 'Microsoft Teams', icon: 'MessageSquare', category: 'Chat' },
  { id: 'drive', name: 'Google Drive', icon: 'FileText', category: 'Documents' },
  { id: 'dropbox', name: 'Dropbox', icon: 'FileText', category: 'Documents' },
  { id: 'onedrive', name: 'OneDrive', icon: 'FileText', category: 'Documents' },
  { id: 'notion', name: 'Notion', icon: 'FileText', category: 'Documents' },
  { id: 'asana', name: 'Asana', icon: 'ClipboardList', category: 'Project Management' },
  { id: 'jira', name: 'Jira', icon: 'ClipboardList', category: 'Project Management' },
  { id: 'monday', name: 'Monday', icon: 'ClipboardList', category: 'Project Management' },
  { id: 'salesforce', name: 'Salesforce', icon: 'Users', category: 'CRM' },
  { id: 'hubspot', name: 'HubSpot', icon: 'Users', category: 'CRM' },
  { id: 'postgres', name: 'PostgreSQL', icon: 'Database', category: 'Databases' },
  { id: 'mongodb', name: 'MongoDB', icon: 'Database', category: 'Databases' },
  { id: 'airtable', name: 'Airtable', icon: 'Database', category: 'Databases' },
  { id: 'api', name: 'Custom APIs', icon: 'Code', category: 'APIs' }
];

const categories = [
  'Email',
  'Chat',
  'Documents',
  'Project Management',
  'CRM',
  'Databases',
  'APIs'
];

interface DataSourceInventoryProps {
  principle: string;
  dataSources: string[];
}

export default function DataSourceInventory({ principle, dataSources }: DataSourceInventoryProps) {
  const [selectedSources, setSelectedSources] = useState<Set<string>>(() => {
    // Load from cookie
    const saved = document.cookie
      .split('; ')
      .find(row => row.startsWith('dataSourceInventory='));
    if (saved) {
      try {
        return new Set(JSON.parse(decodeURIComponent(saved.split('=')[1])));
      } catch {
        return new Set();
      }
    }
    return new Set();
  });

  useEffect(() => {
    // Save to cookie (expires in 90 days)
    const expires = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `dataSourceInventory=${encodeURIComponent(JSON.stringify(Array.from(selectedSources)))}; expires=${expires}; path=/`;
  }, [selectedSources]);

  const toggleSource = (sourceId: string) => {
    const newSelected = new Set(selectedSources);
    if (newSelected.has(sourceId)) {
      newSelected.delete(sourceId);
    } else {
      newSelected.add(sourceId);
    }
    setSelectedSources(newSelected);
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      Mail,
      MessageSquare,
      FileText,
      ClipboardList,
      Users,
      Database,
      Code
    };
    return icons[iconName] || FileText;
  };

  // Calculate category counts
  const selectedByCategory = categories.map(cat => ({
    category: cat,
    count: dataSourcesConfig.filter(ds => ds.category === cat && selectedSources.has(ds.id)).length
  })).filter(c => c.count > 0);

  const totalSelected = selectedSources.size;
  const categoriesUsed = selectedByCategory.length;

  return (
    <div className="space-y-6">
      {/* Principle Callout */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 rounded-lg">
        <h4 className="font-semibold text-slate-900 mb-2">The Key Principle</h4>
        <p className="text-sm text-slate-700">{principle}</p>
      </div>

      {/* Selection Summary */}
      {totalSelected > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-100 rounded-lg p-4 flex items-center justify-between"
        >
          <div>
            <p className="text-sm font-medium text-slate-900">Your Data Stack</p>
            <p className="text-xs text-slate-600">
              {totalSelected} data {totalSelected === 1 ? 'source' : 'sources'} across {categoriesUsed} {categoriesUsed === 1 ? 'category' : 'categories'}
            </p>
          </div>
          <div className="flex gap-2">
            {selectedByCategory.map(({ category, count }) => (
              <Badge key={category} variant="outline" className="text-xs">
                {category}: {count}
              </Badge>
            ))}
          </div>
        </motion.div>
      )}

      {/* Instructions */}
      <div className="text-sm text-slate-600">
        <p>Select the data sources you regularly use for work. This helps identify which AI tools can access your information.</p>
      </div>

      {/* Data Source Grid by Category */}
      <div className="space-y-6">
        {categories.map(category => {
          const sourcesInCategory = dataSourcesConfig.filter(ds => ds.category === category);
          return (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                {category}
                <Badge variant="outline" className="text-xs">
                  {sourcesInCategory.filter(ds => selectedSources.has(ds.id)).length}/{sourcesInCategory.length}
                </Badge>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {sourcesInCategory.map(source => {
                  const Icon = getIcon(source.icon);
                  const isSelected = selectedSources.has(source.id);
                  return (
                    <button
                      key={source.id}
                      onClick={() => toggleSource(source.id)}
                      className={`
                        relative p-4 rounded-lg border-2 transition-all
                        ${isSelected
                          ? 'border-orange-500 bg-orange-50 shadow-md'
                          : 'border-slate-200 hover:border-orange-300 hover:bg-orange-50/30'
                        }
                      `}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2">
                          <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      )}
                      <Icon className={`h-6 w-6 mb-2 ${isSelected ? 'text-orange-600' : 'text-slate-400'}`} />
                      <p className={`text-sm font-medium ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>
                        {source.name}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tool Recommendations Teaser */}
      {totalSelected > 0 && (
        <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              Next Step: Find Matching Tools
            </CardTitle>
            <CardDescription className="text-base">
              Based on your {totalSelected} selected data {totalSelected === 1 ? 'source' : 'sources'}, look for AI tools that support these integrations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-slate-700 font-medium">
                Recommended actions:
              </p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                <li>Check the Tool Selection Decision Tree (Section 4) below</li>
                <li>Visit the Home page to filter tools by your data sources</li>
                <li>Look for tools with native integrations or MCP server support</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {totalSelected === 0 && (
        <Card className="border-2 border-dashed border-slate-300">
          <CardContent className="py-8 text-center">
            <Database className="h-12 w-12 text-slate-400 mx-auto mb-3" />
            <p className="text-sm text-slate-600">
              Select your data sources above to get started
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
