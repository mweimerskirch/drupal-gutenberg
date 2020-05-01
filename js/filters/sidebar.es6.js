((wp, Drupal) => {
  const { element, plugins, editPost } = wp;
  const { useRef, useEffect } = element;
  const { registerPlugin } = plugins;
  const { PluginDocumentSettingPanel } = editPost;
 
  const FormPanel = () => {
    const ref = useRef(null);

    useEffect(() => {
      ref.current.appendChild(document.getElementById('edit-advanced'));

      return () => {
        document.getElementById('gutenberg-sidebar').appendChild(document.getElementById('edit-advanced'));
      }
    }, []);

    return (
      <div ref={ref}></div>
    );
  }

  const MyDocumentSettingTest = () => {
    return (
      <PluginDocumentSettingPanel opened={true} className="node-setting-plugin" title="Node">
        <FormPanel />
      </PluginDocumentSettingPanel>
    )
  };
  
  registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );

})(wp, Drupal);
