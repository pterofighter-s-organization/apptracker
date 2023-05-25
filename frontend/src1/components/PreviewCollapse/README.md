
# This component must
- this component must be pair with a collapse container

# This component has
- elements like button and the blur background
- the buttons, and the background to activate the collapse

# EXAMPLE of how to use a preivew collapse with container to put the item

<div style={{ position: "relative" }}> - collapse container
    <div
        id="collapse-tasks"
        style={{ maxHeight: taskVh.toString() + "vh", overflow: "hidden" }}
    >
        <div
            className="table-responsive"
            id="dashboard-tasks"
        >
            <TaskTable
                tasks={tasks}
            />
        </div>
    </div>
    <PreviewCollapse
        text={"Tasks"}
        maxVhOfCollapse={(int)}
        collapseId={"collapse-tasks"}
        overflow={"hidden"}
        dependency={tasks}
    />
</div>