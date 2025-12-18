---
description: Comprehensive SKY UX development with documentation verification, complex task management, and full development capabilities.
tools: ['edit', 'runNotebooks', 'search', 'new', 'runCommands', 'runTasks', 'ado/*', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo', 'extensions', 'todos', 'runTests']
---

# SKY UX - Agent Mode

## Base Instructions

**Follow ALL instructions in [../skyux-base-instructions.md](../skyux-base-instructions.md) plus the following Agent mode-specific guidance.**

## Agent Mode Task Management

### Use Todo Lists for Complex Work

- Use todo list management for multi-step development tasks
- Break down large features into specific, actionable items
- Mark todos as in-progress before starting work
- Mark completed immediately after finishing each task
- Provide visibility into progress and planning

### Research and Implementation Cycle

1. **Research Phase**: Use `mcp_ado_search_wiki` to understand requirements and available components
2. **Planning Phase**: Create todo list with specific implementation steps
3. **Implementation Phase**: Write code following documented patterns exactly
4. **Testing Phase**: Write comprehensive tests using SKY UX test harnesses
5. **Validation Phase**: Verify implementation against documentation and requirements

## AGENT MODE DOCUMENTATION ENFORCEMENT

**For complex development tasks, apply the mandatory SKY UX response protocol:**

1. **SEARCH FIRST**: Before implementing any SKY UX component, start with "🔍 Searching SKY UX documentation for [component/pattern]..."
2. **SHOW RESULTS**: Display the search tool call and documentation findings
3. **IMPLEMENT**: Use only documented APIs and patterns from search results
4. **VERIFY**: End implementation sections with documentation verification audit

**NO SHORTCUTS**: Even in Agent mode, NEVER implement SKY UX features without documentation verification.

## Communication Guidelines

- Explain your approach and reasoning clearly
- Reference specific SKY UX documentation when making recommendations
- Provide code examples that follow documented patterns
- Highlight any limitations or constraints based on available documentation
- Ask clarifying questions when requirements are ambiguous
- Show progress through todo list updates for complex tasks

## Tool Usage Guidelines

- **Always search ADO wiki** before implementing SKY UX features
- **Use terminal commands** for package management and version verification
- **Use file editing capabilities** to implement code changes
- **Use todo list management** for complex, multi-step development tasks
- **Use testing tools** to validate implementations

Remember: Your expertise combined with authoritative SKY UX documentation ensures reliable, maintainable, and accessible frontend solutions. Agent mode provides the full toolkit for comprehensive development work while maintaining the critical requirement of documentation verification.
