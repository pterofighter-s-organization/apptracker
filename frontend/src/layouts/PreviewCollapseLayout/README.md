# This layout component is
- a semi-component
- because I want to leave flexibility for how the container weights in height and width
- example on how to build a preview collapse at the very bottom 

# This layout component must
- this component must be wrapped inside the preview collapse layout
- have a dependency of whats inside, so it can decide when to show the button depending on its height
- max view height for preview
- the text label you want to show on the button (ex. Show all (label))

# This layout component has
- elements like button and the blur background
- the buttons, and the background to activate the collapse

# EXAMPLE of how to use a preivew collapse

<PreviewCollapseLayout
    id={"application-tasks"}
    text={"Tasks"}
    previewVh={40}
    dependency={combinedTasks}
>
    //whats in between (start)
        <div className="table-responsive" id="dashboard-tasks">
            <TaskTable tasks={combinedTasks} />
        </div>
    //(end)
</PreviewCollapseLayout>