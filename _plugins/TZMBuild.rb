module RunNodeBefore
  def self.process(site, payload)
    return if @processed
    system "bash mergejs -c build/jsfilelist.txt assets/bundled/dist.js" 
    @processed = true
  end
end

Jekyll::Hooks.register :site, :pre_render do |site, payload|
  RunNodeBefore.process(site, payload)
end
